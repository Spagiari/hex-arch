class DrivenCreator {
  constructor() {
    this.products = {};
  }

  register(productName, Class) {
    this.products[productName] = Class;
  }

  factory(productName) {
    const Product = this.products[productName];
    if (!Product) throw new Error(`Invalid product name ${productName}.`);
    return new Product();
  }
}

module.exports = new DrivenCreator();
