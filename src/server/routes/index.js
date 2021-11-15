const commonController = require('../controller/commonController');
const restaurantController = require('../controller/restaurantController');
const userController = require('../controller/userController');

const initialize = (app) => {
    app.get('/api/healthcheck', commonController.healthCheck);
    app.get('/api/getRestaurantList', restaurantController.restaurantList);
    app.post('/api/getFavouriteList', userController.userInfo);
    app.post('/api/saveFavouriteList', userController.saveFavouriteList);
}

module.exports = {
    initialize
}