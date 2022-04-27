// 订单状态：A：DT0000000001，B：DT0000000002，C：DT0000000003
// 订单类型：普通订单：1，特殊订单：2
// 角色：运营：1，客户：2

// 当订单状态是A时，text = '状态A'，执行操作 action1
// 当订单状态是B时，角色是客户时，text = '状态B'，执行操作 action2
// 当订单状态是B时，角色是运营时，text = '状态B1'，执行操作 action2
// 当订单状态是C，并且订单类型是 普通订单 时，text = '状态C'，执行操作 action3
// 当订单状态是C，并且订单类型是 特殊订单 时，text = '状态C1'，执行操作 action4

enum Status {
  A = 'DT0000000001',
  B = 'DT0000000002',
  C = 'DT0000000003'
}

// 订单类型枚举
enum Type {
  Normal = 1,
  Special = 2
}

// 角色枚举
enum Role {
  Operator = 1,
  Customer = 2
}

export class StrategyNo {
  status: Status;
  type: Type;
  role: Role;

  text: string;

  constructor(status: Status, type: Type, role: Role) {
    this.status = status;
    this.type = type;
    this.role = role;
    this.execute();
  }

  execute() {
    if (this.status === 'DT0000000001') {
      this.text = 'A';
      this.action1();
    } else if (this.status === 'DT0000000002') {
      if (this.role === 1) {
        this.text = 'B1';
      }
      this.text = 'B';
      this.action2();
    } else if (this.status === 'DT0000000003') {
      if (this.type === 2) {
        this.text = 'C1';
        this.action4();
      } else {
        this.text = 'C';
        this.action3();
      }
    }
  }

  action1() {
    this.logText();
    console.log('action1');
  }

  action2() {
    this.logText();
    console.log('action2');
  }

  action3() {
    this.logText();
    console.log('action3');
  }

  action4() {
    this.logText();
    console.log('action4');
  }

  logText() {
    console.log(this.text);
  }
}