const { Observable, from } = require('rxjs')

const findOne = (model, opt) => from(model.findOne(Object.assign({}, opt, {raw: true})))

const destroyMany = (model, opt) => from(model.destroy(opt))

const max = (model, opt) => from(model.max(opt))

const bulkCreate = (model, opt) => from(model.bulkCreate(opt))

const fetchPaginated = (model, opt, page, limit) => {
  return Observable.create((observer) => {
    let offset = 0
    model.findAndCountAll(opt)
      .then((data) => {
        let pages = Math.ceil(data.count / limit)
        offset = limit * (page - 1)
        model.findAll(Object.assign({}, opt, {
          limit: limit,
          offset: offset,
          $sort: { id: 1 }
        }))
          .then((d) => {
            observer.next({'result': d, 'count': data.count, 'pages': pages})
            observer.complete()
          })
      })
      .catch(e => observer.error(e))
  })
}

module.exports = {findOne, bulkCreate, destroyMany, fetchPaginated, max}
