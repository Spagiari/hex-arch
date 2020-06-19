class DrivenAdapter {
  constructor(config) {
    if (new.target === DrivenAdapter) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }
    config.methods.forEach(el => {
        if (this[el] === undefined) {
            // or maybe test typeof this.method === "function"
            throw new TypeError(`Must override method ${el} in ${new.target.name}`);
          }        
    });
  }
}

module.exports = DrivenAdapter;
