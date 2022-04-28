class Product {
  constructor() {
    this.price = 0;
    this.actions = [];
  }

  setBasePrice(val) {
    this.price = val;
    this.notifyAll();
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter(el => !(el instanceof observer));
  }

  notifyAll() {
    return this.actions.forEach(el => el.update(this));
  }
}

class Fees {
  update(product) {
    // product.price = product.price * 1.2;
    console.log('product.price :>> ', product.price);
  }
}

class Proft {
  update(product) {
    // product.price = product.price * 2;
    console.log('product.price :>> ', product.price);
  }
}

const product = new Product();

const fees = new Fees();
const proft = new Proft();

product.register(fees);
product.register(proft);

product.setBasePrice(100);

setTimeout(() => {
  product.setBasePrice(120);
}, 1000);