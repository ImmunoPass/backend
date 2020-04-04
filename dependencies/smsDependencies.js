const smsService = require("../service/sms");
const {
  loginOtpApiValidation,
  sendImmunopassPassApiValidation,
  sendImmunopassVoucherApiValidation
} = require("../infra/validations/smsApiValidations");

module.exports = {
  smsService,
  loginOtpApiValidation,
  sendImmunopassPassApiValidation,
  sendImmunopassVoucherApiValidation
};
