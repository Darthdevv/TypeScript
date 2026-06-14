"use strict";
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
function getUserInfo(user) {
    if (user.role === "admin") {
        console.log("Admin permissions:", user.permissions);
    }
    else {
        console.log("Customer purchase history:", user.purchaseHistory);
    }
}
function describeUserWithInOperator(user) {
    if ("purchaseHistory" in user) {
        console.log("Customer purchase history:", user.purchaseHistory);
    }
    else {
        console.log("Admin permissions:", user.permissions);
    }
}
const arrayOfUnions = [1, "two", 3, "four"];
const unionOfArrays = [1, 2, 3];
// or ["one", "two", "three"]
arrayOfUnions.push("five");
console.log(arrayOfUnions);
unionOfArrays.push(4);
console.log(unionOfArrays);
