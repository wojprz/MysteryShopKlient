import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class UserService {

  public _getUserUrl = "https://mysteryshop20210328143557.azurewebsites.net/api/User/GetUser";
  public _removeUserUrl ="https://mysteryshop20210328143557.azurewebsites.net/api/User/RemoveUser/";
  public _changeEmailUrl ="https://mysteryshop20210328143557.azurewebsites.net/api/User/ChangeEmail/";
  public _changePassword ="https://mysteryshop20210328143557.azurewebsites.net/api/User/ChangePassword/";

  constructor(public http: HttpClient) { }

  getUser(id) {
    return this.http.get<any>(this._getUserUrl, {params: {id}});
  }

  removeUser(id: string){
    return this.http.delete(this._removeUserUrl+ id);
  }

  changePassword(id: string, oldPassword: string, newPassword: string){
    return this.http.put(this._changePassword, {parms: {id: id, oldPassword: oldPassword, newPassword: newPassword}});
  }

  changeEmail(id: string, newEamil: string){
    return this.http.put(this._changeEmailUrl, {parms: {id: id, newEmail: newEamil}});
  }
}
