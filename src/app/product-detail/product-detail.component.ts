import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Rating } from '../shared/rating.model';


@Component({
selector: 'app-product-detail',
templateUrl: './product-detail.component.html',
styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
product;
comments=[];
currentPage:number=1
rating:any={};
constructor(public productService: ProductService, public route: ActivatedRoute, public _auth : AuthService) { }

ngOnInit() {
this.getProduct();
this.getComments(1);
}
getProduct(): void {
const id = this.route.snapshot.paramMap.get('id');
this.productService.getProductById(id)
  .subscribe(service => this.product = service);
}
getComments(page): void {
const id = this.route.snapshot.paramMap.get('id');
this.productService.getProductComments(id,page)
  .subscribe(res =>
    {
      if(res.length>0)
      {
        this.comments = res;
        this.currentPage=page;
      }
    });
}

vote(rate: number){
const id = this.route.snapshot.paramMap.get('id');
this.rating.Rate=rate;
this.rating.ServiceID=id;
this.productService.addRating(rate, id, localStorage.getItem('UserID'))
    .subscribe(
      res=>this.ngOnInit(),
      err=>this.showError(err.error.message)
      );
}

showError(error: string) {
document.getElementById('serviceDetailError').innerHTML = error;
}

addNewComment(comment: string) {
const productID = this.route.snapshot.paramMap.get('id');
this.productService.addComment(comment, productID).subscribe(res=>this.ngOnInit(), err=>{this.showError(err.error.message);
                                                                                    document.getElementById('addComment').focus()});
                                                                                    document.getElementById('addComment').focus();
}
}
