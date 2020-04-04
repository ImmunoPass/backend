module.exports = (
  {
    // inject dependencies here
  }
) => {
  async function loginOtpApi({ to, otp }) {
    // business logic goes here
    const sms = {
      to: to,
      body: `Your login OTP is ${otp}}`,
      priority: "High"
    };

    await sendSms(sms);
    return true;
  }

  async function sendImmunopassPassApi({ to, token }) {
    // business logic goes here
    const sms = {
      to: to,
      body: `You have been assigned a ImmunoPass for a coronavirus. Your ImmunePass token is ${token}}. Call 6789 for further information.`,
      priority: "High"
    };

    await sendSms(sms);
    return true;
  }

  async function sendImmunopassVoucherApi({ to, voucherCode }) {
    // business logic goes here
    const sms = {
      to: to,
      body: `You have been assigned a voucher for a coronavirus immunity test. Your voucher code is ${voucherCode}. Please wait for further instructions from your employer. Call 6789 for further information.`,
      priority: "High"
    };

    await sendSms(sms);
    return true;
  }

  return { loginOtpApi, sendImmunopassPassApi, sendImmunopassVoucherApi };
};
