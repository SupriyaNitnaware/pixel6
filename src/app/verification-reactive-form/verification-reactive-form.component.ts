import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Component({
  selector: 'app-verification-reactive-form',
  templateUrl: './verification-reactive-form.component.html',
  styleUrls: ['./verification-reactive-form.component.css']
})
export class VerificationReactiveFormComponent implements OnInit {

  Form = new FormGroup({
      fullName: new FormControl(''),
      city: new FormControl(''),
      pannumber: new FormGroup({
      email: new FormControl(''),
      mobilenumber: new FormControl(''),
      otp: new FormControl(''),
    }),
  })
  phoneNo:any;
  otpToVerify= '';
  otpGet:Boolean = false;
  sucMsg:string = '';
  errMsg:string = '';
  otpSession:any = {}
  httpOptions:any = {
    headers:new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    ),
    params:new HttpParams()
  };

  constructor(private http:HttpClient){}
  getOtp(){
    console.log("phone no", this.phoneNo)
    this.sucMsg = '';
    this.errMsg = '';
    if(typeof this.phoneNo == "string" &&  this.phoneNo.length == 10){
    let url = 'https://2factor.in/API/V1/6406ae56-09f1-11e9-a895-0200cd936042/SMS/9818427650/AUTOGEN/viney';
   
    this.http.get(url)
      .subscribe((res:any) =>{
        console.log("get res", res)
        if(res.Status == "Success"){
          this.otpGet = true;
          this.otpSession = res
        }
      })
    }else{
      alert("Please enter 10-digit phone no.")
    }
  }
  verifyOtp(){
    console.log("otp ", this.otpToVerify)
    if(this.otpToVerify.length == 6){
    let url = "https://2factor.in/API/V1/6406ae56-09f1-11e9-a895-0200cd936042/SMS/VERIFY/" + this.otpSession.Details + '/' + this.otpToVerify;
    
    this.http.get(url)
    .subscribe((res:any) =>{
      console.log("Otp verify", res)
    if(res.Status == "Success"){
        this.errMsg = ''
        this.sucMsg = res.Details
        this.otpToVerify = '';
        this.phoneNo = '';
      }else{
        this.sucMsg = ''
        this.errMsg = res.Details
      }
    })
    }
  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    if (this.Form.valid) {
      alert("Form Submitted!");
      this.Form.reset();
    }
  }
  OnReset()
  {}
  
}