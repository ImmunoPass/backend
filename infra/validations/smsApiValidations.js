async function loginOtpApiValidation({ to, otp, userName }) {
  if (to == null || to == "") {
    return Promise.reject({
      type: "VALIDATION_FAIL",
    });
  }
  if (otp == null || otp == "") {
    return Promise.reject({
      type: "VALIDATION_FAIL",
    });
  }
  if (userName == null || userName == "") {
    return Promise.reject({
      type: "VALIDATION_FAIL",
    });
  }
  return Promise.resolve();
}

async function sendImmunopassPassApiValidation({ to, token, userStatus }) {
  if (to == null || to == "") {
    return Promise.reject({
      type: "VALIDATION_FAIL",
    });
  }
  if (token == null || token == "") {
    return Promise.reject({
      type: "VALIDATION_FAIL",
    });
  }
  if (userStatus == null || userStatus == "") {
    return Promise.reject({
      type: "VALIDATION_FAIL",
    });
  }
  return Promise.resolve();
}
async function sendImmunopassVoucherApiValidation({
  to,
  voucherCode,
  userName,
  userMobileNumber,
  userDOB,
}) {
  if (to == null || to == "") {
    return Promise.reject({
      type: "VALIDATION_FAIL",
    });
  }
  if (voucherCode == null || voucherCode == "") {
    return Promise.reject({
      type: "VALIDATION_FAIL",
    });
  }
  if (userName == null || userName == "") {
    return Promise.reject({
      type: "VALIDATION_FAIL",
    });
  }
  if (userMobileNumber == null || userMobileNumber == "") {
    return Promise.reject({
      type: "VALIDATION_FAIL",
    });
  }
  if (userDOB == null || userDOB == "") {
    return Promise.reject({
      type: "VALIDATION_FAIL",
    });
  }

  return Promise.resolve();
}

module.exports = {
  loginOtpApiValidation,
  sendImmunopassPassApiValidation,
  sendImmunopassVoucherApiValidation,
};
