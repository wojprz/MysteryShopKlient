import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData:any = {}

  constructor(public _auth: AuthService,
              public _router: Router) { }

  ngOnInit() {
  }

  showError(err: string) {
    document.getElementById("error").innerHTML = err;
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        var b = res.Token
        localStorage.setItem('Token', res.accessToken)
        localStorage.setItem('UserID', res.userId)
        this._router.navigate(['/products'])
      },
      err => {this.showError(err.error.message);
        document.getElementById('userLogin').focus();
        document.getElementById('userPass').focus();}

    )
  }

}
