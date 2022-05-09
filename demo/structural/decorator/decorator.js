// 汽车服务类
class CarService {
  constructor() {
    this.price = 0;
  }
  getPrice() {
    return this.price;
  }
}

// 洗车服务类
class CarWash extends CarService {
  constructor() {
    super();
    this.price = 8;
  }
}

// 汽车服务装饰器
class CarServiceDecorator extends CarService {
  constructor(carService) {
    super();
    this.carService = carService;
  }

  getPrice() {
    return this.carService.getPrice();
  }
}

// 附加服务装饰器
class AffixDecorator extends CarServiceDecorator {
  constructor(carService) {
    super(carService);
  }

  getPrice() {
    return super.getPrice() + 6;
  }
}

// 折扣装饰器
class DiscountDecorator extends CarServiceDecorator {
  constructor(carService) {
    super(carService);
  }

  getPrice() {
    return super.getPrice() * 0.9;
  }
}

const carWash = new CarWash();
console.log(carWash.getPrice()); // 8

const carWashAffix = new AffixDecorator(new CarWash());
console.log(carWashAffix.getPrice()); // 14

const carWashDiscount = new DiscountDecorator(new AffixDecorator(new CarWash()));
console.log(carWashDiscount.getPrice()); // 12.6