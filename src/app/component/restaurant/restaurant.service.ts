import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RestaurantModel } from './restaurantModel';
import { Observable } from 'rxjs';
import { AppService } from '../../app.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseUrl = environment.apiUrl;

  constructor(private _appService: AppService) { }

  // Service Method to get list of restaurant from databse
  public getRestaurantList():Observable<RestaurantModel[]> {
    const endpoint = this.baseUrl+'/api/getRestaurantList';
    return this._appService.get(endpoint);
  }
}
