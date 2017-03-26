const app = require('./app');
const mongoose = require('./mongoose');
const faker = require('faker');
const User = require('./models/User');

const factory = {

  data: function (modelName, addicionalData = {}) {
    return Object.assign({
      email: faker.internet.email().toLowerCase(),
      password: faker.internet.password()
    }, addicionalData);
  },

  create: function (modelName, quantity = 1, addicionalData = {}) {
    const model = mongoose.model(modelName);

    let promises = [];
    for (let i = 0; i < quantity; i++) {
      const data = this.data(modelName, addicionalData);
      promises.push(model.create(data));
    }
    return Promise.all(promises);
  },

  insert: function (modelName, quantity = 1, addicionalData = {}) {
    const model = mongoose.model(modelName);

    let documents = [];

    for (let i = 0; i < quantity; i++) {
      const data = this.data(modelName, addicionalData);
      documents.push(data);
    }
    return model.insertMany(documents);
  }
}

module.exports = { factory };
