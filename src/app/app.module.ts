import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './component/restaurant/restaurant-list/restaurant-list.component';
import { RestaurantDashboardComponent } from './component/restaurant/restaurant-dashboard/restaurant-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { SearchComponent } from './shared/search/search.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FavouriteDashboardComponent } from './component/favourite/favourite-dashboard/favourite-dashboard.component';
import { LoginComponent } from './component/login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfoComponent } from './component/user/user-info/user-info.component';
import { FavouriteListComponent } from './component/favourite/favourite-list/favourite-list.component';
import { AddToFavouriteComponent } from './component/favourite/add-to-favourite/add-to-favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantDashboardComponent,
    PaginationComponent,
    SearchComponent,
    LoaderComponent,
    FilterPipe,
    FavouriteDashboardComponent,
    LoginComponent,
    UserInfoComponent,
    FavouriteListComponent,
    AddToFavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
