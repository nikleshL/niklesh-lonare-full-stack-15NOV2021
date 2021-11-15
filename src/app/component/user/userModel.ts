export class RestaurantInfo {
  '_id': String;
  'RestaurantName': String;
  'RestaurantTiming': String
 }
 
 export class FavouriteListModel {
   'favouriteCategory' : string;
   'restaurant' : Array<RestaurantInfo>;
 }
 
 export class UserModel {
   '_id': { type: string}
   'email': { type: string, unique: true };
   'favouriteList' : Array<FavouriteListModel>;
 };
 