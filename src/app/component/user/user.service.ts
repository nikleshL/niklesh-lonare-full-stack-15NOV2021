import { Injectable } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.apiUrl;

  constructor(private _appService : AppService) { }

  // Method to save favourite list
  public saveFavouriteList(data) {
    const endpoint = this.baseUrl+'/api/saveFavouriteList';
    return this._appService.post(endpoint,data);
  }
}
