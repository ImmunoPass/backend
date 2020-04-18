module.exports = ({
  smsService,
  loginOtpApiValidation,
  sendImmunopassPassApiValidation,
  sendImmunopassVoucherApiValidation,
}) => {
  async function loginOtpApi({ to, otp, userName }) {
    await loginOtpApiValidation({ to, otp, userName });
    const sms = {
      to: to,
      body: `Hi ${userName}, your OTP to log into the ImmunoPass administrator portal is ${otp}. Please do not share this OTP with anyone.`,
      priority: "High",
    };
    const d = await smsService.send(sms);
    // @todo remove the log later
    console.log(d);

    return true;
  }

  async function sendImmunopassPassApi({ to, token, userStatus }) {
    await sendImmunopassPassApiValidation({ to, token, userStatus });
    const sms = {
      to: to,
      body: `Your coronavirus antibody status is ${userStatus}. Your certificate number is ${token}. Please show this SMS if you are asked about your immunity status. Click here https://tinyurl.com/szs7fwu to learn more.`,
      priority: "High",
    };

    const result = await smsService.send(sms);
    console.log(result);
    return true;
  }

  async function sendImmunopassVoucherApi({
    to,
    voucherCode,
    userName,
    userMobileNumber,
    userDOB,
  }) {
    await sendImmunopassVoucherApiValidation({
      to,
      voucherCode,
      userName,
      userMobileNumber,
      userDOB,
    });
    const sms = {
      to: to,
      body: `You have been assigned a voucher for a coronavirus immunity test. Your voucher details are - Voucher Code: ${voucherCode}, Name: ${userName}, Phone: ${userMobileNumber}, DOB: ${userDOB}. Visit https://tinyurl.com/szs7fwu to find your nearest laboratory for testing. Please carry this SMS along with your ID card for authentication at the lab.`,
      priority: "High",
    };

    await smsService.send(sms);
    return true;
  }

  return { loginOtpApi, sendImmunopassPassApi, sendImmunopassVoucherApi };
};
