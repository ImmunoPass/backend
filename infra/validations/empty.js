module.exports = {
  validate: (data) => {
    let err = {type: 'VALIDATION_FAIL'};
    err.data = {
      messages: [1,2]
    }
    return Promise.resolve({error:'Validation failed'});
  }
};
