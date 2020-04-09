import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {MatButtonModule} from '@angular/material/button';

import { LoginCredential } from './login.model';
import { AuthService } from '../auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  email;
  password;
  login: LoginCredential;

  constructor(public authService: AuthService) { }
  ngOnInit(): void {}

  onLogin(form: NgForm) {
    console.log('Login form data', form.value);
    if (form.invalid) {
      alert('form in invalid');
      return;
    }
    console.log('form.value.email', form.value.email);
    console.log('form.value.password', form.value.password);
    this.authService.loginUser(form.value.email, form.value.password);
  }
}
