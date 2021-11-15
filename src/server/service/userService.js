const daoService = require('./daoService');
const LoginInfo = require('../model/userModel');

/**
 * Method to Return a list of comments
 */
let userInfo = async (req, res) => {
    try {
        let userRes = await daoService.getData(LoginInfo, req.body);
        if (userRes == null) {
            let user = new LoginInfo({
                'email' : req.body.email,
            });
            if (req.body.favouriteList) {
                user.favouriteList = req.body.favouriteList;
            }
            userRes = await daoService.saveData(user);
        }
        return userRes;
    } catch (error){
        throw error;
    }
}

let saveFavouriteList = async (req, res) => {
    try {
        console.log('req.body.favouriteList',req.body.favouriteList);
        let updateData = {
            'favouriteList':req.body.favouriteList
        }
        let updatedData = await daoService.checkAndUpdate(LoginInfo, req.body._id, updateData);
        return updatedData;
    } catch (error){
        throw error;
    }
}

module.exports = {
    userInfo,
    saveFavouriteList
}