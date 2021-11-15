/**
 *  Model for Restaurant info
 */

 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;
 
 const RestaurantInfo = new Schema({
   "RestaurantName":{type: String},
   "RestaurantTiming":{type: String}
 });
 
 module.exports = mongoose.model("RestaurantInfo", RestaurantInfo);
 