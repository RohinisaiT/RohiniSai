import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent{
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  submitted = false;

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }
  
  constructor(private fb: FormBuilder) {
    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [''],
    });
  }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.contactForm.invalid) {
        console.log('Error');
      }
      else{
        this.contactForm.reset();
        this.disabledSubmitButton=true;
        alert('Your feedback is submitted successfully');
        console.log(this.contactForm.value);
      } 
    }
  }
