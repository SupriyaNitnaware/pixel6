import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationReactiveFormComponent } from './verification-reactive-form.component';

describe('VerificationReactiveFormComponent', () => {
  let component: VerificationReactiveFormComponent;
  let fixture: ComponentFixture<VerificationReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
