const httpStatus = require('http-status');
const { pick } = require('lodash');
const AppError = require('../../utils/AppError');
const path = require("path");
const formidable = require('formidable');

const fileParser = () => (req, res, next) => {
    const form = formidable({ multiples: true,uploadDir:path.resolve(__dirname+"../../../../filesTMP"),keepExtensions:true});
    try {
      form.parse(req, (err, fields, files) => {
        if (err) {
          return next(new AppError(httpStatus.BAD_REQUEST, err.toString()));
        }
        req.body = Object.assign({},fields,files)
        next()
      });   
    } catch (error) {
      console.log(error)
    }
    
};

module.exports = fileParser;
