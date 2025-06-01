"use strict";
const menu = [
    { name: "margrita", price: 0 },
    { name: "peproni", price: 10 },
    { name: "hawaian", price: 30 },
    { name: "veggie", price: 5 },
];
let cashInRegister = 100;
const orderQueue = [];
let nextOrderId = 1;
function addToMenu(pizza) {
    menu.push(pizza);
}
addToMenu({ name: "cheese", price: 20 });
function createOrder(arr, pizzaName) {
    const pizzaObj = arr.find((o) => o.name === pizzaName);
    if (!pizzaObj) {
        throw new Error(`Pizza with name ${pizzaName} not found in menu`);
    }
    const order = Object.assign(Object.assign({}, pizzaObj), { id: nextOrderId++, status: "ordered" });
    cashInRegister += order.price;
    orderQueue.push(order);
    return order;
}
try {
    const order = createOrder(menu, 'peproni');
    console.log(order);
}
catch (error) {
    console.error(error);
}
console.log(orderQueue);
