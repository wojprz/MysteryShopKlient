import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  productData:any={}

  constructor(public _router : Router, public services : ProductService, public _auth: AuthService) { }

  ngOnInit() {
  }

  showError(error: string) {
    document.getElementById("error").innerHTML = error;
  }

  addNewProduct () {
    this.services.addProduct(this.productData)
    .subscribe(
      res => {
        this._router.navigate(['/products'])
      },
      err => {this.showError(err.error.message);
        document.getElementById('serviceDesc').focus();}
        )
      }

}
