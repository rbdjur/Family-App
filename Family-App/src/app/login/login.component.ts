import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormsModule} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {MatButtonModule} from '@angular/material/button';

import { LoginCredential } from './login.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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

export class LoginComponent implements OnInit, OnDestroy {
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
  isloading = false;
  private authStatusSub: Subscription;


  constructor(public authService: AuthService, public router: Router) { }
  ngOnInit(): void {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authSTatus => {
      this.isloading = false;
    });
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

  onLogin(form: NgForm) {
    // console.log('Login form data', form.value);
    if (form.invalid) {
      alert('form i invalid');
      return;
    }
    this.isloading = true;
    this.authService.loginUser(form.value.email, form.value.password);
  }
}
