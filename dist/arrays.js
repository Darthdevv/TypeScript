"use strict";
// readonly array
const arr = [1, 2, 3];
const arr1 = [1, 2, 3];
// arr.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
const tuple = [1, "two"];
// tuple[0] = 2; // Error: Cannot assign to '0' because it is a read-only property. 
