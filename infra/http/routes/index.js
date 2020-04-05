const express = require("express");
const { authToken } = require("../../../config/config.json");
const smsDependencies = require("../../../dependencies/smsDependencies");
const testReportDependencies = require("../../../dependencies/testReportDependencies");
const {
  loginOtpApi,
  sendImmunopassPassApi,
  sendImmunopassVoucherApi,
} = require("../../../controllers/sms")(smsDependencies);
const { testReportWebHookApi } = require("../../../controllers/testReport")(
  testReportDependencies
);

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ status: "running" });
});

router.post("/v1/sms/login-otp", async (req, res) => {
  try {
    const auth = req.get("Authentication");
    if (auth !== authToken) {
      throw { type: "AUTH_FAIL" };
    }
    await loginOtpApi({
      to: req.body.to,
      otp: req.body.otp,
    });
    return res.status(200).send({
      status: "OK",
    });
  } catch (error) {
    if (error.type === "AUTH_FAIL") {
      return res.status(401).send({ status: "FAIL" });
    }
    if (error.type === "VALIDATION_FAIL") {
      return res.status(400).send({ status: "FAIL" });
    }
    return res.status(500).send({ status: "FAIL" });
  }
});

router.post("/v1/sms/send-pass", async (req, res) => {
  try {
    const auth = req.get("Authentication");
    if (auth !== authToken) {
      throw { type: "AUTH_FAIL" };
    }
    await sendImmunopassPassApi({
      to: req.body.to,
      token: req.body.token,
    });
    return res.status(200).send({
      status: "OK",
    });
  } catch (error) {
    if (error.type === "AUTH_FAIL") {
      return res.status(401).send({ status: "FAIL" });
    }
    if (error.type === "VALIDATION_FAIL") {
      return res.status(400).send({ status: "FAIL" });
    }
    return res.status(500).send({ status: "FAIL" });
  }
});

router.post("/v1/sms/send-voucher", async (req, res) => {
  try {
    const auth = req.get("Authentication");
    if (auth !== authToken) {
      throw { type: "AUTH_FAIL" };
    }
    await sendImmunopassVoucherApi({
      to: req.body.to,
      voucherCode: req.body.voucherCode,
    });
    return res.status(200).send({
      status: "OK",
    });
  } catch (error) {
    if (error.type === "AUTH_FAIL") {
      return res.status(401).send({ status: "FAIL" });
    }
    if (error.type === "VALIDATION_FAIL") {
      return res.status(400).send({ status: "FAIL" });
    }
    return res.status(500).send({ status: "FAIL" });
  }
});

router.post("/v1/test-reports/webhook", async (req, res) => {
  try {
    const payload = req.body;
    const result = await testReportWebHookApi({
      testReportPayload: payload,
      provider: "LiveHealth",
    });
    res.status(200).send({status: 'OK'});
    if (status === true && next !== null) {
      try {
        await next();
      } catch (error) {
        // @todo write this to error logs
      }
    }
  } catch (error) {
    return res.status(500).send({ status: "FAIL" });
  }
});

module.exports = router;
