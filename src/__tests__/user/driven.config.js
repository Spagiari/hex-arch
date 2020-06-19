const AdapterDB = require('./driven/db/AdapterDB');

module.exports = {
  production: {
    repository: {
      className: 'HashTableDB',
      adapter: AdapterDB,
    },
  },
  test: {
    repository: {
      className: 'MockDB',
      adapter: AdapterDB,
    },
  },
};
