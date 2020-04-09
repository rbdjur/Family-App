import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../auth.service';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  firstName;
  lastName;
  email;
  password;

  constructor(public authService: AuthService) { }
  ngOnInit(): void {}

  onSignup(form: NgForm) {
    console.log('Sign up form data', form.value);
    if (form.invalid) {
      alert('form in invalid');
      return;
    }
    console.log('form.value.firstname', form.value.first);
    console.log('form.value.lastname', form.value.last);
    console.log('form.value.email', form.value.email);
    console.log('form.value.password', form.value.password);
    this.authService.signupUser(form.value.first, form.value.last, form.value.email, form.value.password);
  }
}
