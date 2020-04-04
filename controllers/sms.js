module.exports = (
  {
    smsService
  }
) => {
  async function loginOtpApi({ to, otp }) {
    const sms = {
      to: to,
      body: `Your login OTP is ${otp}}`,
      priority: "High"
    };

    await smsService.send(sms);
    return true;
  }

  async function sendImmunopassPassApi({ to, token }) {
    const sms = {
      to: to,
      body: `You have been assigned a ImmunoPass for a coronavirus. Your ImmunePass token is ${token}}. Call 6789 for further information.`,
      priority: "High"
    };

    await smsService.send(sms);
    return true;
  }

  async function sendImmunopassVoucherApi({ to, voucherCode }) {
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
