import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Helpers } from '../Helpers';


@Component({
  selector: 'app-products-searched',
  templateUrl: './products-searched.component.html',
  styleUrls: ['./products-searched.component.scss']
})
export class ProductsSearchedComponent implements OnInit {

  products = []
  currentPage:number=1

  constructor(public route: ActivatedRoute, public _productService: ProductService, public helpers: Helpers, public _auth: AuthService) {

  }

  ngOnInit() {
    const searched = localStorage.getItem('Search')
    this._productService.getSearched(searched, this.currentPage)
      .subscribe(
        res => this.products = res
      )
  }

  getProducts(page) {
    const searched = localStorage.getItem('Search')
    this._productService.getSearched(searched, page)
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
