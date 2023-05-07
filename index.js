class Worker {
  constructor(firstName, lastName, age, yearsOfExpirience) {
    this._firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.yearsOfExpirience = yearsOfExpirience;
  }

  get FullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(newName) {
    this._firstName = newName;
  }
}

const work1 = new Worker("ii", "tt", 51, 20);

////////////////////////////////////////////////////////////////////
class Order {
  // #private;
  // #status;
  // #test = 21345;
  // #customer;

  constructor(customer, address, status, product) {
    if (typeof address !== "string" || address === "") {
      throw new TypeError("Invalid data for address");
    }
    if (!Object.values(ORDER_STATUS).includes(status)) {
      throw new TypeError("Incorect status value");
    }

    this.customer = customer;
    this.address = address;
    this.status = status;
    this.product = product;
    this.private = "secret";
  }

  print() {
    return `Order with customer ${this.customer.getFullName()} has status: ${
      this.status
    } and address: ${this.address}. Order contains ${this.products
      .map(
        (productData) =>
          `${productData.amount} units of product ${productData.productName}`
      )
      .join(", ")}`;
  }
}

const customer1 = new Worker("Test", "Userenko", 33, 4);

const order1Products = [
  {
    productName: "pizza 4 cheese",
    amount: 3,
  },
  {
    productName: "cola",
    amount: 4,
  },
];

// enumeration
const ORDER_STATUS = {
  DELIVERED: "delivered",
  IN_TRANSIT: "in transit",
  ORDERED: "ordered",
  PENDING_PAYMENT: "pending payment",
};

const order1 = new Order(
  customer1,
  "vyl. Garna 5",

  ORDER_STATUS.DELIVERED,
  order1Products
);
// console.log(order1.#private);

const order2 = new Order(
  customer1,
  "vyl. Garna 5",
  ORDER_STATUS.IN_TRANSIT,
  order1Products
);
const order3 = new Order(
  customer1,
  "vyl. Garna 5",
  ORDER_STATUS.ORDERED,
  order1Products
);

const order4 = new Order(
  customer1,
  "vyl. Garna 5",
  ORDER_STATUS.DELIVERED,
  false
);

// if (order1.status === ORDER_STATUS.DELIVERED) {
//   console.log("order 1 is delivered");
// }

/**OOP *********************************/

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isBanner = false;
  }

  createMessage(message) {
    console.log(message);
  }
}

const u1 = new User("User", "1", 21);

class Moderator extends User {
  constructor(name1, name2, age1, permissions) {
    // даємо все що потрібно конструктру батьківського
    // класу
    super(name1, name2, age1);
    // класу
    super(name1, name2, age1);
    // тількі після виклику super
    this.permissions = permissions;
  }
  ban(user) {
    if (!User.isUser(user)) {
      throw new TypeError("You can only ban users");
    }
    // console.log(`${user} is banned`)
    user.isBanned = true;

    // return true;
  }
}

//////////////////////////////
/*Створити клас Admin який спадкується від Moderator
  адміни мають вміти банити користувачів

  При цьому у будья кого користувача має бути властивість
  isBanned яка показує чи забанен він*/

class Admin extends Moderator {
  constructor(name1, name2, age1, permissions) {
    super(name1, name2, age1, permissions);
  }

  static isAdmin(user) {
    return user instanceof Admin;
  }
  ban(user) {
    if (!User.isUser(user)) {
      throw new TypeError("You can only ban users");
    }
    // console.log(`${user} is banned`)
    user.isBanned = true;

    // return true;
  }

  unban(user) {
    if (!User.isUser(user)) {
      throw new TypeError("You can only unban users");
    }
    if (!user.isBanned) {
      throw new Error("User is not banned");
    }
    user.isBanned = false;
  }
}

////////////////////////////
class Figure {
  constructor(name) {
    this.name = name;
  }

  getArea() {}
}

const figure1 = new Figure("figure");

class Triangle extends Figure {
  constructor(a, h) {
    super("triangle");
    this.a = a;
    this.h = h;
  }

  getArea() {
    return this.a * this.h * 0.5;
  }
}

const triangle1 = new Triangle(5, 7);

class Square extends Figure {
  constructor(a) {
    super("square");
    this.a = a;
  }

  getArea() {
    return this.a * this.a;
  }
}

const square1 = new Square(8);

function getFigureArea(figure) {
  if (figure instanceof Figure) {
    return figure.getArea();
  }

  throw new TypeError("You must provide Figure instance");
}

class Circle extends Figure {
  constructor(r) {
    super("circle");
    this.r = r;
  }

  getArea() {
    return Math.PI * Math.pow(this.r, 2);
  }
}

const circle1 = new Circle(5);
/////////////////////////////////////////////

/*Створити клас Animal і успадкувати від нього декілька
  класів тварин (коти, собика, хом'ячки)

  Всі тварини мають ім'я і вид тварин
  Також всі тварини вміють їсти, рухатись і спати

  Створіть класс Дресирувальника. У нього будуть методи
  які будть змушувати тваринку робити якісь речі*/

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
  eat(food) {}
  move() {}
  sleep() {}
}

class Cat extends Animal {
  constructor(name) {
    super("Cat", name);
  }
}

class Mouse extends Animal {
  constructor(name) {
    super("Mouse");
  }
}

class Trainer {
  constructor(name) {
    this.name = name;
  }
  feedAnimal(animal, food) {}
}
