import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { Helpers } from '../Helpers';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = []
  currentPage:number=1

  constructor(public _productService: ProductService, public helpers: Helpers, public _auth: AuthService, public _router: Router) {

  }

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

  remove(id: string) {
    this._productService.removeProduct(id)
      .subscribe(
        res => this.ngOnInit()
      )
  }

}
