/**
 * Get all data from database
 * @param {*} req 
 * @param {*} res 
 */
let getAllData = async (collectionName, query) => {
  try {
    let dataArr=[];
    const data = await collectionName.find(query);
    for(let i=0; i<data.length; i++){
      dataArr.push(data[i]._doc);
    }
    return dataArr;
  }catch(err) {
    return err;
  }
}

/**
 * Delete data in database
 * @param {*} req 
 * @param {*} res 
 */
const findAndDelete = async (collectionName, query) => {
  try{
    let data = await collectionName.findOneAndDelete(query,{ returnNewDocument: true, useFindAndModify: false});
    return data;
  } catch(err) {
    return err;
  }
}

/**
 * Update data to database
 * @param {*} req 
 * @param {*} res 
 */
let checkAndUpdate = async (collectionName, query, updateData) => {
  try {
    let data = await collectionName.findByIdAndUpdate(query, updateData, { upsert: true, returnNewDocument: true , new:true});
    if(data == null){
      return data;
    }
    return data.toJSON();
  } catch(err) {
    return err;
  }
}

/**
 * Get data from database
 * @param {*} req 
 * @param {*} res 
 */
let getData = async (collectionName, query) => {
  try {
    const data = await collectionName.findOne(query);
    if(data == null){
      return data;
    }
    return data.toJSON();
  } catch(err) {
    return err;
  }
}

let saveData = async (collectionData) => {
  try {
    const data = await collectionData.save();
    if(data == null){
      return data;
    }
    return data.toJSON();
  } catch(err) {
    return err;
  }
}

module.exports = {
  findAndDelete,
  checkAndUpdate,
  getData,
  getAllData,
  saveData
}