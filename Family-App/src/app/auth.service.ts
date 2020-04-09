import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpData } from './signup-auth-data.model';
import { LoginData } from './login-auth-data.model';

@Injectable({ providedIn: 'root'})

export class AuthService {
  constructor(private http: HttpClient) {
  }

  signupUser(first: string, last: string, username: string, password: string) {

    const authData: SignUpData = {
      first,
      last,
      username,
      password
    };

    this.http.post('http://localhost:8080/signup', authData)
    .subscribe((response) => {
      console.log('auth.service.ts - signupUser() ', response);
    });
  }

  loginUser(username: string, password: string) {
    const authData: LoginData = {
      username,
      password
    };
    this.http.post('http://localhost:8080/login', authData)
    .subscribe(response => {
      console.log('auth.service.ts - loginUser() - token ', response);
    });
  }
}
