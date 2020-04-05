async function loginOtpApiValidation({ to, otp }) {
  if (to == null || otp == null || to == "" || otp == "") {
    return Promise.reject({
      type: "VALIDATION_FAIL"
    });
  }
  return Promise.resolve();
}

async function sendImmunopassPassApiValidation({ to, token }) {
  if (to == null || token == null || to == "" || token == "") {
    return Promise.reject({
      type: "VALIDATION_FAIL"
    });
  }
  return Promise.resolve();
}
async function sendImmunopassVoucherApiValidation({ to, voucherCode }) {
  if (to == null || voucherCode == null || to == "" || voucherCode == "") {
    return Promise.reject({
      type: "VALIDATION_FAIL"
    });
  }
  return Promise.resolve();
}

module.exports = {
  loginOtpApiValidation,
  sendImmunopassPassApiValidation,
  sendImmunopassVoucherApiValidation
};
