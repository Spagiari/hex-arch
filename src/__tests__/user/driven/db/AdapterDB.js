const DrivenAdapter = require('../../../../DrivenAdapter');
const config = require('./adapterDB.config')

class AdapterDB extends DrivenAdapter {
  constructor() {
    super(config);
  }
}

module.exports = AdapterDB;
