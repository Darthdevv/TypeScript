type Pizza = {
  name: string;
  price: number;
  status?: string;
};

const menu: Pizza[] = [
  { name: "margrita", price: 0 },
  { name: "peproni", price: 10 },
  { name: "hawaian", price: 30 },
  { name: "veggie", price: 5 },
];

let cashInRegister: number = 100;
const orderQueue: Pizza[] = [];
let nextOrderId: number = 1;

function addToMenu(pizza: Pizza): void {
  menu.push(pizza);
}

addToMenu({ name: "cheese", price: 20 });

function createOrder(arr: Pizza[], pizzaName: string): Pizza | undefined {
  // Find pizzaObj by name from menu
  const pizzaObj = arr.find((o) => o.name === pizzaName);

  if (!pizzaObj) {
    throw new Error(`Pizza with name ${pizzaName} not found in menu`);
  }

  // Create a new object to avoid mutating the original menu object
  const order = { ...pizzaObj, id: nextOrderId++, status: "ordered" };

  // Add price to cashInRegister
  cashInRegister += order.price;

  // Pushes new object to the order queue
  orderQueue.push(order);

  return order;
}

try {
  const order = createOrder(menu, 'peproni');
  console.log(order);
} catch (error) {
  console.error(error);
}

console.log(orderQueue);