import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from './signup-auth-data.model';
import { LoginData } from './login-auth-data.model';
import {Subject} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})

export class AuthService {
  token: string;
  private isAuthenticated = false;
  private tokenTimer: any;
  private userId: string;
  private authStatusListener = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    console.log('hello from getToken() - this.token', this.token);
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  signupUser(email: string, password: string) {
    // console.log('email: ', email);
    // console.log('password:', password);
    const authData: SignUp = {
      email: email,
      password: password
    };
    this.http.post<{email: string, password: string}>('http://localhost:8080/api/user/signup', authData)
    .subscribe(() => {
      this.router.navigate(['auth/login']);
    }, error => {
      this.authStatusListener.next(false);
    });
  }

  loginUser(email: string, password: string) {
    const authData: LoginData = {
      email,
      password
    };
    this.http.post<{token: string, expiresIn: number, userId: string}>('http://localhost:8080/api/user/login', authData)
    .subscribe(response => {
      const token = response.token;
      // console.log('token', response.token);
      this.token = token;
      if (this.token) {
        // console.log('we have a valid token');
        const expiresInDuration = response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        // console.log(expiresInDuration);
        this.isAuthenticated = true;
        this.userId = response.userId;
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
        // console.log('expirationDuration', expirationDate);
        this.saveAuthData(token, expirationDate, this.userId);
        this.router.navigate(['/posts']);
      }
    }, error => {
      this.authStatusListener.next(false);
    });
  }

  authoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    // console.log('this.token should be null: ', this.token);
    // console.log('this.isAuthenticated should be flase: ', this.isAuthenticated);
    this.authStatusListener.next(false);
    this.userId = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/auth/login']);
  }

  private setAuthTimer(duration: number) {
    // console.log('Setting timer:', duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 250);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId
    };
  }
}
