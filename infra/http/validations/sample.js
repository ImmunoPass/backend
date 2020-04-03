const Joi = require('@hapi/joi');

module.exports = {
  create : {
    body: Joi.object().keys({
      userid: Joi.string().required()
    })},
  verifyPan : {
    body:Joi.object().keys({
      oid : Joi.string().required(),
      firstPan: Joi.string().pattern(new RegExp('^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$')).required(),
      taxStatus : Joi.string().required()
    })
  },
  getCaptcha : {
    body:Joi.object().keys({
      oid : Joi.string().required()
    })
  },
  checkCaptcha : {
    body:Joi.object().keys({
      oid : Joi.string().required(),
      text : Joi.string().required(),
      captchaId : Joi.string().required()
    })
  },
  getState : {
    body:Joi.object().keys({
      oid : Joi.string().required()
    })
  },
  uploadPOI:{
    body:Joi.object().keys({
      oid : Joi.string().required(),
      type: Joi.string().valid('pan').required(), 
      file: Joi.any().required()
    })
  },
  submitPOI:{
    body:Joi.object().keys({
      oid: Joi.string().required(),
      name: Joi.string().required(),
      fatherName: Joi.string().required(),
      dob: Joi.string().required(),
      panNumber: Joi.string().required(), 
    })
  },
  uploadPOA:{
    body:Joi.object().keys({
      oid : Joi.string().required(),
      type: Joi.string().valid('aadhaar', 'voterid', 'passport','drivingLicence').required(), 
      file: Joi.any().required()
    })
  },
  submitPOA:{
    body:Joi.object().keys({
      "oid": Joi.string().required(),
      "type": Joi.string().valid('aadhaar', 'voterId', 'passport','drivingLicence').required(), 
      "name": Joi.string().required(),
      "address": Joi.string().required(),
      "pincode": Joi.string().required(),
      "city": Joi.string().required(),
      "state": Joi.string().required(),
      "district": Joi.string().required(),
      "dob": Joi.string(),
      "birthDate": Joi.string(),
      "uid": Joi.string(),
      "passportNumber":Joi.string(),
      "epicNumber":Joi.string(),
      "number": Joi.string(),
      "expiryDate": Joi.string(),
      "issueDate": Joi.string(),
    }).or('dob', 'birthDate').xor('uid','passportNumber','epicNumber','number').with('number',["expiryDate","issueDate"]).with('passportNumber',["expiryDate","issueDate"])
  },
  uploadCPOA:{
    body:Joi.object().keys({
      oid : Joi.string().required(),
      type: Joi.string().valid('aadhaar', 'voterid', 'passport','drivingLicence').required(), 
      file: Joi.any().required()
    })
  },
  submitCPOA:{
    body:Joi.object().keys({
      "oid": Joi.string().required(),
      "sameAsPermanent":Joi.boolean(),
      "type": Joi.string().valid('aadhaar', 'voterId', 'passport','drivingLicence'), 
      "name": Joi.string(),
      "address": Joi.string(),
      "pincode": Joi.string(),
      "city": Joi.string(),
      "state": Joi.string(),
      "district": Joi.string(),
      "dob": Joi.string(),
      "birthDate": Joi.string(),
      "uid": Joi.string(),
      "passportNumber":Joi.string(),
      "epicNumber":Joi.string(),
      "number": Joi.string(),
      "expiryDate": Joi.string(),
      "issueDate": Joi.string(),
    }).xor("sameAsPermanent","type").xor("sameAsPermanent",'uid','passportNumber','epicNumber','number').with('number',["expiryDate","issueDate"]).with('passportNumber',["expiryDate","issueDate"])
  },
  getOnboardingData:{
    body:Joi.object().keys({
      oid : Joi.string().required()
    })
  },
};



