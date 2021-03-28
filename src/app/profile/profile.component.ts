import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Helpers } from '../Helpers';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData = {}
  user;
  constructor(public userService: UserService, public route: ActivatedRoute, public _auth: AuthService, public helpers: Helpers) {
    const id: string = route.snapshot.params.id;
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(
        res => this.user = res);
  }


}

