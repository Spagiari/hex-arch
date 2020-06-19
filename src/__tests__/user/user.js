require('./driven');
const config = require('./driven.config');
const Core = require('../../Core');

class User extends Core {
  constructor(env) {
    super(config, env);
  }

  addUser({ id, name, pwd }) {
    this.container.repository.addUser({
      id,
      user: { id, name, pwd, block: false },
    });
  }

  blockUser(id) {
    const user = this.container.repository.getUser(id);
    user.block = true;
    this.container.repository.updateUser({ id, user });
  }
}

module.exports.ports = new User();
