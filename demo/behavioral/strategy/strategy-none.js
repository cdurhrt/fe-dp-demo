class ShoppingCart {
  constructor() {
    this.discountType = "guest";
    this.amount = 0;
  }

  // 查看折扣后的价格
  checkout() {
    if (this.discountType === "guest") {
      return this.amount;
    } else if (this.discountType === "vip") {
      return this.amount * 0.9;
    } else if (this.discountType === "vvip") {
      return this.amount * 0.8;
    }
  }

  // 设置折扣类型
  setDiscountType(type) {
    this.discountType = type;
  }

  // 设置原价
  setAmount(amount) {
    this.amount = amount;
  }
}

const cart = new ShoppingCart();
cart.setAmount(100);
cart.setDiscountType("vvip");

const result = cart.checkout();
console.log(result);