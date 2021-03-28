import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Helpers } from '../Helpers';


@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.scss']
})
export class BuyPageComponent implements OnInit {

  userData = {}
  user;

  constructor(public _userService: UserService, public route: ActivatedRoute, public _auth: AuthService, public helpers: Helpers) { }


  ngOnInit() {
    this.getUser();
  }

  getUser(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this._userService.getUser(id)
      .subscribe(
        res => this.user = res);
  }


}
