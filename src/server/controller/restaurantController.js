const commonController = require('./commonController');
const restaurantService = require('../service/restaurantService');

/**
 * Get method to return list of restaurant
 */
let restaurantList = async (req, res, next) => {
    try{
        let restaurantList = await restaurantService.getRestaurantList();
        const response = commonController.successResponse(restaurantList);
        return res.status(200).send(response);
    } catch (err){
        const response = commonController.errorResponse(err);
        return res.status(500).send(response);
    }  
}

module.exports = {
    restaurantList
}