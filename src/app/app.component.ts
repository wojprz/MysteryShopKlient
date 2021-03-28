import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Helpers } from './Helpers';
import { ProductService } from './product.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  search:string;
  products = []
  currentPage:number=1

  constructor(public _router: Router, public _authService: AuthService, public _productService: ProductService, public helpers: Helpers){}

  ngOnInit() {
    this._productService.getProducts(this.currentPage)
      .subscribe(
        res => this.products = res
      )
  }

  getProducts(page) {
    this._productService.getProducts(page)
      .subscribe(
        res => {
          if(res.length>0){
            this.products = res;
            this.currentPage = page;
          }
        }
      )
  }

  searchTitles() {
    //const searchtitle = document.getElementById('serach').textContent;
    localStorage.setItem('Search', this.search);
    this._router.navigate(['/products-searched'])
  }



}
