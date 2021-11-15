import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { UserService } from '../../user/user.service';
import { UserModel, FavouriteListModel, RestaurantInfo } from '../../user/userModel';

@Component({
  selector: 'app-add-to-favourite',
  templateUrl: './add-to-favourite.component.html',
  styleUrls: ['./add-to-favourite.component.css']
})
export class AddToFavouriteComponent implements OnInit {

  @Input() modalInfo;
  @Output() upadateFavouriteList = new EventEmitter();
  selectedRes : any;
  favouriteList: any;
  newCategory = '';
  userData = new UserModel();

  constructor(private _userService: UserService, private _loginService: LoginService) { }

  ngOnInit() {
    this.selectedRes = this.modalInfo.selectedRes;
    this.userData = this.modalInfo.userData;
  }

  createNewCategory() {
    let category = new FavouriteListModel();
    category.favouriteCategory = this.newCategory;
    category.restaurant = [];
    this.userData.favouriteList.push(category);
  }

  addRestToCategory(category) {
    this.userData.favouriteList.forEach((cat)=>{
      if(cat.favouriteCategory == category.favouriteCategory) {
        cat.restaurant.push(this.selectedRes);
      }
    });
    this.saveUpdatedData();
  }

  saveUpdatedData() {
    console.log(this.userData);
    this._userService.saveFavouriteList(this.userData).subscribe((response) => {
      this._loginService.userdata = response.data;
      this._loginService.loggedInSuccess();
      this.upadateFavouriteList.emit();
    } , (err) => {
      
    });
  }
}
