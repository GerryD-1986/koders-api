const createError = require('http-errors');
const Koders = require("../models/koders.model");
const encrypt = require("../lib/encrypt");
const jwt = require("../lib/jwt");

async function login(email,password){
  const koder = await Koders.findOne({email: email});
  if(!koder){
    throw createError(401,'Invalid data');
  }

  const isPasswrdValid = await encrypt.compare(password, koder.password);

  if(!isPasswrdValid){
    throw createError(401, "invalid data");
  }

  const token = jwt.sign({id: koder._id});
  return token;

}

module.exports = {
    login,
};