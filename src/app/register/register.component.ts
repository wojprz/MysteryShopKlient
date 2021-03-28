import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error: string;
  registerUserData:any = {}
  constructor(public _auth: AuthService,
              public _router: Router) { }

  ngOnInit() {
  }

  showError(error: string) {
    document.getElementById("error").innerHTML = error;
  }
  clearPassword(){
    (<HTMLInputElement>document.getElementById("registrationPass")).value="";
    (<HTMLInputElement>document.getElementById("repeatPassword")).value="";
  }
  clearLogin(){
    (<HTMLInputElement>document.getElementById("registrationLogin")).value="";
  }
  clearEmail(){
    (<HTMLInputElement>document.getElementById("registrationEmail")).value="";
  }
  registerUser() {
    if((<HTMLInputElement>document.getElementById('repeatPassword')).value==(<HTMLInputElement>document.getElementById('registrationPass')).value)
    {
      this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          this.loginUser();
        },
        err => {
          this.showError(err.error.message);
          }

      )
    }
    else{
      this.showError("Podane hasła są niezgodne");
      this.clearPassword();
    }
  }

  loginUser () {
    this._auth.loginUser(this.registerUserData)
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
