// 被观察者类
class Product {
  constructor() {
    this.price = 0;
    this.actions = [];
  }

  // 更新价格并通知
  setBasePrice(val) {
    this.price = val;
    this.notifyAll();
  }

  // 注册观察者动作
  register(observer) {
    this.actions.push(observer);
  }

  // 取消注册动作
  unregister(observer) {
    this.actions = this.actions.filter(el => !(el instanceof observer));
  }

  // 通知动作
  notifyAll() {
    return this.actions.forEach(el => el.update(this));
  }
}

// 观察者类 Fees
class Fees {
  update(product) {
    // product.price = product.price * 1.2;
    console.log('Fees: product.price :>> ', product.price);
  }
}

// 观察者类 Product
class Proft {
  update(product) {
    // product.price = product.price * 2;
    console.log('Proft: product.price :>> ', product.price);
  }
}

const product = new Product();

const fees = new Fees();
const proft = new Proft();

// 注册观察者
product.register(new Fees());
product.register(new Proft());

product.setBasePrice(100);

// 输出：
// Fees: product.price :>>  100
// Proft: product.price :>>  100

product.unregister(Fees);

product.setBasePrice(200);

// 输出：
// Proft: product.price :>>  200