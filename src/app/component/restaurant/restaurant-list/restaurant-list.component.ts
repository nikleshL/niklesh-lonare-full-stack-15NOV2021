import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../../login/login.service';
import { RestaurantService } from '../restaurant.service';
import { RestaurantModel } from '../restaurantModel';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  public restaurantList : Array<RestaurantModel> = [];
  public showLoader = true;
  @Input() filterOption: any;
  @Input() searchByKeyword: string;
  public type: string;
  public isOpenModal = false
  userLoggedIn: Subscription;
  isLoggedIn: any;
  userData: any;
  modalInfo: any = {};

  constructor(private _restaurantService : RestaurantService, private _loginService: LoginService) { }

  ngOnInit() {
    this.getRestaurantList();
    this.userLoggedInSubscription();
  }

  ngOnChanges(): void {
    if (this.filterOption) {
      this.searchByKeyword = this.filterOption.value;
      this.type = this.filterOption.type;
    }
  }

  // Method to get list of all restaurant
  public getRestaurantList () {
    this._restaurantService.getRestaurantList().subscribe((response: any) => {
      if (response != null && response.status == 'Success') {
        response.data.forEach(element => {
          let restaurant = new RestaurantModel();
          restaurant.RestaurantName = element.RestaurantName;
          restaurant.RestaurantTiming = element.RestaurantTiming;
          restaurant._id = element._id;
          this.restaurantList.push(restaurant);
        });
        this.showLoader = false;
      }
    });
  }

  public openModal (restaurant){
    this.isOpenModal = true;
    this.modalInfo.selectedRes = restaurant;
    this.modalInfo.userData = this.userData;
  }

  public userLoggedInSubscription() {
    this.userLoggedIn = this._loginService.userData$.subscribe((data) => {
      this.isLoggedIn = data.isLoggedIn;
      this.userData = data.userData;
    });
  }

  upadateFavouriteList() {
    this.isOpenModal = false;
  }

  ngOnDestroy() {
    if (this.userLoggedIn) {
      this.userLoggedIn.unsubscribe();
    }
  }
}
