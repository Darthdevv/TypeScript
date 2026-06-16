// readonly array
const arr: ReadonlyArray<number> = [1, 2, 3];
// arr.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.

const tuple: readonly [number, string] = [1, "two"];
// tuple[0] = 2; // Error: Cannot assign to '0' because it is a read-only property. 