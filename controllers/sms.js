module.exports = ({
  smsService,
  loginOtpApiValidation,
  sendImmunopassPassApiValidation,
  sendImmunopassVoucherApiValidation
}) => {
  async function loginOtpApi({ to, otp }) {
    await loginOtpApiValidation({ to, otp });
    const sms = {
      to: to,
      body: `Your login OTP is ${otp}}`,
      priority: "High"
    };
    const d = await smsService.send(sms);
    // @todo remove the log later
    console.log(d);

    return true;
  }

  async function sendImmunopassPassApi({ to, token }) {
    await sendImmunopassPassApiValidation({ to, token });
    const sms = {
      to: to,
      body: `You have been assigned a ImmunoPass for a coronavirus. Your ImmunePass token is ${token}}. Call 6789 for further information.`,
      priority: "High"
    };

    await smsService.send(sms);
    return true;
  }

  async function sendImmunopassVoucherApi({ to, voucherCode }) {
    await sendImmunopassVoucherApiValidation({ to, voucherCode });
    const sms = {
      to: to,
      body: `You have been assigned a voucher for a coronavirus immunity test. Your voucher code is ${voucherCode}. Please wait for further instructions from your employer. Call 6789 for further information.`,
      priority: "High"
    };

    await smsService.send(sms);
    return true;
  }

  return { loginOtpApi, sendImmunopassPassApi, sendImmunopassVoucherApi };
};
