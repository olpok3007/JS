class Worker {
  constructor(name, lastname, age, experience) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.experience = experience;
  }
  getFullname() {
    return `${this.name}${this.lastname}`;
  }
  verificatioAdult() {
    if (this.age >= 18) {
      return `Welcome! You are of age`;
    }
    return "you are a minor";
  }
}
const worker1 = new Worker("ivan", "ivanow", 18, true);

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

// const order1Products2 = ['pizza 4 cheese', 'cola'];

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
  "delivered",
  ORDER_STATUS.DELIVERED,
  order1Products
);
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

if (order1.status === ORDER_STATUS.DELIVERED) {
  console.log("order 1 is delivered");
}
