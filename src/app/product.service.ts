import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Injectable()
export class ProductService {

  public _createProductUrl = "https://mysteryshop20210328143557.azurewebsites.net/api/Product/CreateProduct";
  public _getByIdUrl = "https://mysteryshop20210328143557.azurewebsites.net/api/Product/GetById";
  public _getAllUrl = "https://mysteryshop20210328143557.azurewebsites.net/api/Product/GetAll";
  public _getSearchUrl = "https://mysteryshop20210328143557.azurewebsites.net/api/Product/GetSearch";
  public _getAllUserProductsUrl = "https://mysteryshop20210328143557.azurewebsites.net/api/Product/GetAllUserProducts";
  public _removeProductUrl = "https://mysteryshop20210328143557.azurewebsites.net/api/Product/Remove";
  public _getAllProductCommentsUrl = "https://mysteryshop20210328143557.azurewebsites.net/api/Comment/GetAllProductComments";
  public _getAllUserCommentsUrl = "https://mysteryshop20210328143557.azurewebsites.net/api/Comment/GetAllUserComments";
  public _removeCommentUrl = "https://mysteryshop20210328143557.azurewebsites.net/api/Comment/Remove";
  public _addCommentUrl = "https://mysteryshop20210328143557.azurewebsites.net/api/Comment/AddComment";
  public _voteUrl = "https://mysteryshop20210328143557.azurewebsites.net/api/Rating/Vote"

  constructor(public http: HttpClient) { }

  getProductById(id) {
    return this.http.get<any>(this._getByIdUrl, {params: {id:  id}});

  }

  getProducts(page) {
    return this.http.get<any>(this._getAllUrl, {params: {page: page, count: "5"}});
  }

  getProductComments(id, page) {
    return this.http.get<any>(this._getAllProductCommentsUrl, {params: {productID: id, page: page, count: "5"}});
  }

  getProduct(id) {
    return this.http.get<any>(this._getByIdUrl + id);
  }

  addProduct(product) {
    product.UserID=localStorage.getItem('UserID');
    return this.http.post<any>(this._createProductUrl, product);
  }

  getAllUserComments(id, page) {
    return this.http.get<any>(this._getAllUserCommentsUrl, {params: {userID: id, page: page, count: "5"}})
  }

  addComment(content, productID) {
    var userID=localStorage.getItem('UserID');
    var comment={userID, content, productID};
    return this.http.post<any>(this._addCommentUrl, comment);
  }

  removeProduct(id) {
    return this.http.delete<any>(this._removeProductUrl, {params: {id}});
  }

  removeComment(id: string) {
    return this.http.delete<any>(this._removeCommentUrl + id, { withCredentials: true });
  }

  addRating(rate, productID, userID) {
    var ratingSend = {rate, productID, userID};
    //return this.http.post<any>(this._voteUrl, {parms: {rate: rating, productID: productID, userID: userID}} );
    return this.http.post<any>(this._voteUrl, ratingSend );
  }

  getSearched(title: string, page) {
    return this.http.get<any>(this._getSearchUrl, {params: {title: title, page: page, count: "5"}})
  }

  getUserProducts(id, page) {
    return this.http.get<any>(this._getAllUserProductsUrl, {params: {userID: id, page: page, count: "5"}})
  }

}
