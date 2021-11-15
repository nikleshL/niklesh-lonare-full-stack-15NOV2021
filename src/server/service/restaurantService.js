const daoService = require('./daoService');
const RestaurantInfo = require('../model/restaurantModel');

/**
 * Method to Return a list of comments
 */
let getRestaurantList = async (req, res, next) => {
    try {
        return daoService.getAllData(RestaurantInfo, {});
    } catch (error){
        throw error;
    }
}

module.exports = {
    getRestaurantList
}