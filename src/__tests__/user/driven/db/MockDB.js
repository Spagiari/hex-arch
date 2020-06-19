const config = require('./adapterDB.config');
const creator = require('../../../../drivenCreator');
const AdapterDB = require('./AdapterDB');

class MockDB extends AdapterDB {
  constructor() {
    super(config);
  }

  addUser(user) {
    console.log(user);
  }

  updateUser({ id, user }) {
    console.log(id, user);
  }

  getUser(id) {
    console.log(id);
  }
}

creator.register('MockDB', MockDB);

module.exports = MockDB;
