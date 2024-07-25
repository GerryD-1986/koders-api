const createError = require("http-errors")
const encrypt = require("../lib/encrypt")
const Koders = require('../models/koders.model');




async function create(koderData){
    const koderFound = await Koders.findOne({email: koderData.email});
 if(koderFound){
    throw createError(409,"email already in use");
 }

 koderData.password = await encrypt.encrypt(koderData.password);
 
    
    const newKoder = await Koders.create(koderData);
    return newKoder;
}

async function getAll(){
    const allKoders = await Koders.find();
    return allKoders;
}

async function getById(id){
    const koder = await Koders.findById(id);
    return koder;
}

async function deleteById(id){
    const koderDeleted = await koders.findByIdAndDelete(id);
    return koderDeleted;
}

async function updateById(id, newKoderData){
    const updateKoder = await Koders.findByIdAndUpdate(id, newKoderData, {new: true, });
    return updateKoder;
}


module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById,
};