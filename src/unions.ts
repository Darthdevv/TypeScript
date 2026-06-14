// union types
type Id = number | string;


function printId(id: Id) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// object union types
type Admin = { role: "admin"; permissions: string[] };
type Customer = { role: "customer"; purchaseHistory: string[] };

type User = Admin | Customer;

function getUserInfo(user: User) {
  if( user.role === "admin") {
    console.log("Admin permissions:", user.permissions);
  } else {
    console.log("Customer purchase history:", user.purchaseHistory);
  }
}

function describeUserWithInOperator(user: User) {
  if ("purchaseHistory" in user) {
    console.log("Customer purchase history:", user.purchaseHistory);
  } else {
    console.log("Admin permissions:", user.permissions);
  }
}


const arrayOfUnions: (number | string)[] = [1, "two", 3, "four"];
const unionOfArrays: number[] | string[] =
  [1, 2, 3];
// or ["one", "two", "three"]


arrayOfUnions.push("five");
console.log(arrayOfUnions);

unionOfArrays.push(4);
console.log(unionOfArrays);