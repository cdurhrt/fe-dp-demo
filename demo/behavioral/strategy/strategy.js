// 购物车类
class ShoppingCart {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }

  // 查看折扣后的价格
  checkout() {
    return this.discount(this.amount);
  }

  // 设置原价
  setAmount(amount) {
    this.amount = amount;
  }
}

// 普通客户策略
function guestStrategy(amount) {
  return amount;
}

// vip客户策略
function vipStrategy(amount) {
  return amount * 0.9;
}

// vvip客户策略
function vvipStrategy(amount) {
  return amount * 0.8;
}

const cart = new ShoppingCart(vipStrategy);
cart.setAmount(100);

const result = cart.checkout();
console.log(result); // 90