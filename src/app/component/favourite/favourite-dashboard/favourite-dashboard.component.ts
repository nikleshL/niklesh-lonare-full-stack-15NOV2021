import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-favourite-dashboard',
  templateUrl: './favourite-dashboard.component.html',
  styleUrls: ['./favourite-dashboard.component.css']
})
export class FavouriteDashboardComponent implements OnInit {

  public isLoggedIn = false;
  public userData;
  userLoggedIn: Subscription;

  constructor( private _loginService : LoginService) { }

  ngOnInit() {
    this.userLoggedInSubscription();
  }

  public userLoggedInSubscription() {
    this.userLoggedIn = this._loginService.userData$.subscribe((data) => {
      this.isLoggedIn = data.isLoggedIn;
      this.userData = data.userData;
    });
  }

  ngOnDestroy() {
    if (this.userLoggedIn) {
      this.userLoggedIn.unsubscribe();
    }
  }
}
