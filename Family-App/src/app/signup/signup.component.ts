import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormsModule} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';


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

export class SignupComponent implements OnInit, OnDestroy {
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
  isloading = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) { }
  ngOnInit(): void {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
      this.isloading = false;
    });
  }

  onSignup(form: NgForm) {
    // console.log('Sign up form data', form.value);
    if (form.invalid) {
      alert('form in invalid');
      return;
    }
    // console.log('form.value.email', form.value.email);
    // console.log('form.value.password', form.value.password);
    this.isloading = true;
    this.authService.signupUser(form.value.email, form.value.password);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
