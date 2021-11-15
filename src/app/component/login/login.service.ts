import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AppService } from '../../app.service';
import { UserModel } from '../user/userModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = environment.apiUrl;
  private _isLoggedIn;
  private _userdata = new UserModel();
  private isUserData = new Subject<any>();
  userData$ = this.isUserData.asObservable();

  public get userdata() {
    return this._userdata;
  }

  public set userdata(value) {
    this._userdata = value;
  }

  public get isLoggedIn() {
    return this._isLoggedIn;
  }

  public set isLoggedIn(value) {
    this._isLoggedIn = value;
  }

  constructor(private _appService: AppService) { }

  // Login service call method
  public callLogin(data) {
    const endpoint = this.baseUrl+'/api/getFavouriteList';
    return this._appService.post(endpoint,data);
  }

  public loggedInSuccess () {
    const user = {
      'isLoggedIn' : this._isLoggedIn,
      'userData' : this._userdata 
    }
    this.isUserData.next(user);
  }
}
