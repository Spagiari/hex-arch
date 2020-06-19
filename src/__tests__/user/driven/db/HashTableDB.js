const config = require('./adapterDB.config');
const creator = require('../../../../drivenCreator');
const AdapterDB = require('./AdapterDB');

class HashTableDB extends AdapterDB {
  constructor() {
    super(config);
    this.userTable = {};
  }

  addUser(user) {
    this.userTable[user.id] = user;
  }

  updateUser({ id, user }) {
    this.userTable[id] = user;
  }

  getUser(id) {
    return this.userTable[id];
  }
}

creator.register('HashTableDB', HashTableDB);

module.exports = HashTableDB;
