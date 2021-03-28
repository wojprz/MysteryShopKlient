import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Helpers } from '../Helpers';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  comments=[];
  products = []
  currentPage:number=1
  currentPageForComment:number=1
  userData = {}
  user;
  constructor(public _productService: ProductService, public userService: UserService, public route: ActivatedRoute, public _auth: AuthService, public helpers: Helpers) {
    const id: string = route.snapshot.params.id;
  }

  ngOnInit() {
    this.getUser();
    this.getProducts(this.currentPage);
    this.getComments(this.currentPage);
  }

  getUser(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(
        res => this.user = res);
  }

  getProducts(page) {
    this._productService.getUserProducts(localStorage.getItem('UserID'),page)
      .subscribe(
        res => {
          if(res.length>0){
            this.products = res;
            this.currentPage = page;
          }
        }
      )
  }

  remove(id: string) {
    this._productService.removeProduct(id)
      .subscribe(
        res => this.ngOnInit()
      )
  }

  getComments(page): void {
    this._productService.getAllUserComments(localStorage.getItem('UserID'),page)
      .subscribe(res =>
        {
          if(res.length>0)
          {
            this.comments = res;
            this.currentPageForComment=page;
          }
        });
    }
}
