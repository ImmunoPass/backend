const models = require('../infra/db/models');
const Sample = models.Sample;

async function create(data) {
  const response = await Sample.create(data);
  return Promise.resolve(orderData);
}

module.exports = {
  create,
}
