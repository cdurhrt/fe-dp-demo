// BMW工厂
class BmwFactory {
  static create(type) {
    if (type === 'X5') {
      return new Bmw(type, 108000, 300);
    }
    if (type === 'X6') {
      return new Bmw(type, 111000, 320);
    }
  }
}

// BMW类
class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

const bmwX5 = BmwFactory.create('X5');
const bmwX6 = BmwFactory.create('X6');