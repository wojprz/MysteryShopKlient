import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class AuthService {

  public _registerUrl = "https://mysteryshop20210328143557.azurewebsites.net/api/Identity/register";
  public _loginUrl = "https://mysteryshop20210328143557.azurewebsites.net/api/Identity/login";

  constructor(public http: HttpClient,
              public _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('Token')
    localStorage.removeItem('UserID')
    this._router.navigate(['/products'])
  }

  getToken() {
    return localStorage.getItem('Token')
  }

  loggedIn() {
    return !!localStorage.getItem('Token')
  }
}
