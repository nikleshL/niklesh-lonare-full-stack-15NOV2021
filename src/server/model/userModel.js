/**
 *  Model for Restaurant info
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantInfo = {
  '_id': String,
  'RestaurantName': String,
  'RestaurantTiming': String
}

const favouriteListModel = {
  'favouriteCategory' : String,
  'restaurant' : [restaurantInfo]
}

const LoginInfo = new Schema({
  'email': { type: String, unique: true },
  'favouriteList' : [favouriteListModel]
});

module.exports = mongoose.model("LoginInfo", LoginInfo);