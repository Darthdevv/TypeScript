var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var menu = [
    { name: "margrita", price: 0 },
    { name: "peproni", price: 10 },
    { name: "hawaian", price: 30 },
    { name: "veggie", price: 5 },
];
var cashInRegister = 100;
var orderQueue = [];
var nextOrderId = 1;
function addToMenu(pizza) {
    menu.push(pizza);
}
addToMenu({ name: "cheese", price: 20 });
function createOrder(arr, pizzaName) {
    // Find pizzaObj by name from menu
    var pizzaObj = arr.find(function (o) { return o.name === pizzaName; });
    if (!pizzaObj) {
        throw new Error("Pizza with name ".concat(pizzaName, " not found in menu"));
    }
    // Create a new object to avoid mutating the original menu object
    var order = __assign(__assign({}, pizzaObj), { id: nextOrderId++, status: "ordered" });
    // Add price to cashInRegister
    cashInRegister += order.price;
    // Pushes new object to the order queue
    orderQueue.push(order);
    return order;
}
try {
    var order = createOrder(menu, 'peproni');
    console.log(order);
}
catch (error) {
    console.error(error);
}
console.log(orderQueue);
