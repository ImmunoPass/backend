const models = require("../infra/db/models");
const testReportData = models.testReportData;

async function create(data) {
  const response = await testReportData.create(data);
  return response.get({ plain: true });
}

module.exports = {
  create,
};
