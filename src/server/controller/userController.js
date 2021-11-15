const commonController = require('./commonController');
const userService = require('../service/userService');

/**
 * Get method to login or register
 */
let userInfo = async (req, res, next) => {
    try{
        let loginRes = await userService.userInfo(req, res);
        const response = commonController.successResponse(loginRes);
        return res.status(200).send(response);
    } catch (err){
        const response = commonController.errorResponse(err);
        return res.status(500).send(response);
    }  
}

let saveFavouriteList = async (req, res, next) => {
    try{
        let loginRes = await userService.saveFavouriteList(req, res);
        const response = commonController.successResponse(loginRes);
        return res.status(200).send(response);
    } catch (err){
        const response = commonController.errorResponse(err);
        return res.status(500).send(response);
    }  
}

module.exports = {
    userInfo,
    saveFavouriteList
}