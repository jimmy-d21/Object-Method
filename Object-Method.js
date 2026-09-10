// Object.keys()
// Returns an array containing the keys (property names) of an object.

// 1. Simple Object: Extract keys
const user = { name: "Alice", age: 28, role: "Admin" };
console.log(Object.keys(user));
// Output: ['name', 'age', 'role']

// 2. Array: Get array indices as string keys
const colors = ["red", "green", "blue"];
console.log(Object.keys(colors));
// Output: ['0', '1', '2']

// 3. Array of Objects: Extract unique column header names for a data table
const employees = [
  { id: 1, name: "John", department: "Engineering" },
  { id: 2, name: "Sarah", department: "Marketing" },
];
const headers = Object.keys(employees[0]);
console.log(headers);
// Output: ['id', 'name', 'department']

// 4. Practical (Object): Check if an object is empty
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isObjectEmpty({})); // Output: true
console.log(isObjectEmpty({ item: "Book" })); // Output: false

// 5. Practical (Array of Objects): Form validation check across multiple inputs
const formData = { username: "johndoe", email: "", password: "123" };
const requiredFields = ["username", "email", "password"];

const emptyFields = Object.keys(formData).filter((key) => !formData[key]);
console.log(`Missing fields: ${emptyFields.join(", ")}`);
// Output: "Missing fields: email"

// Object.values()
// Returns an array containing the values of an object's own enumerable properties.

// 1. Simple Object: Extract values
const scores = { math: 90, english: 85, science: 92 };
console.log(Object.values(scores));
// Output: [90, 85, 92]

// 2. Array: Extract elements (returns array values)
const fruits = ["apple", "banana", "cherry"];
console.log(Object.values(fruits));
// Output: ['apple', 'banana', 'cherry']

// 3. Object with Numeric Values: Calculate total sum
const cart = { item1: 19.99, item2: 5.5, item3: 12.0 };
const total = Object.values(cart).reduce((sum, price) => sum + price, 0);
console.log(`Total: $${total}`);
// Output: Total: $37.49

// 4. Array of Objects: Flatten values from an array of record objects
const orders = [
  { id: 101, status: "SHIPPED" },
  { id: 102, status: "PENDING" },
  { id: 103, status: "SHIPPED" },
];
const allStatuses = orders.map((order) => Object.values(order)[1]);
console.log(allStatuses);
// Output: ['SHIPPED', 'PENDING', 'SHIPPED']

// 5. Practical (Object): Search if any service state is failing
const systemServices = {
  authService: "HEALTHY",
  dbService: "DOWN",
  paymentGateway: "HEALTHY",
};

const hasFailure = Object.values(systemServices).includes("DOWN");
console.log(hasFailure ? "System Warning!" : "All Operational");
// Output: "System Warning!"

// Object.entries()
// Returns an array containing the key-value pairs of an object's own enumerable properties.

// 1. Simple Object: Get key-value pairs as tuple arrays
const settings = { theme: "dark", notifications: true };
console.log(Object.entries(settings));
// Output: [['theme', 'dark'], ['notifications', true]]

// 2. Array: Get [index, value] pairs
const tags = ["js", "react", "node"];
console.log(Object.entries(tags));
// Output: [['0', 'js'], ['1', 'react'], ['2', 'node']]

// 3. Object: Loop over object properties with for...of
const inventory = { apples: 10, oranges: 5, bananas: 12 };
for (const [fruit, count] of Object.entries(inventory)) {
  console.log(`Stock: ${count} ${fruit}`);
}

// 4. Array of Objects: Convert an array of key-value pair objects back into a single object
const configPairs = [
  { key: "env", value: "production" },
  { key: "port", value: 8080 },
];
const configObject = Object.fromEntries(
  configPairs.map((item) => [item.key, item.value]),
);
console.log(configObject);
// Output: { env: 'production', port: 8080 }

// 5. Practical (Object): Filter object properties by value threshold
const rawPrices = { laptop: 1200, mouse: 25, monitor: 300, cable: 10 };
const premiumItems = Object.fromEntries(
  Object.entries(rawPrices).filter(([_, price]) => price >= 100),
);
console.log(premiumItems);
// Output: { laptop: 1200, monitor: 300 }

// Object.assign()
// Copies properties from one or more source objects into a target object.
// Returns the modified target object.

// 1. Simple Objects: Merge two objects
const target = { a: 1 };
const source = { b: 2, c: 3 };
console.log(Object.assign(target, source));
// Output: { a: 1, b: 2, c: 3 }

// 2. Object: Shallow clone an object
const user2 = { name: "Sarah", role: "Editor" };
const clonedUser = Object.assign({}, user2);
clonedUser.name = "Sarah Connor";
console.log(user2);
// Output: "Sarah" (Original untouched)

// 3. Array: Copy array values onto a target array/object
const arr1 = ["a", "b"];
const arr2 = ["c", "d"];
console.log(Object.assign([], arr1, arr2));
// Output: ['c', 'd']

// 4. Array of Objects: Update specific objects in an array immutably
const users = [
  { id: 1, name: "Alice", active: false },
  { id: 2, name: "Bob", active: false },
];
const updatedUsers = users.map((u) =>
  u.id === 1 ? Object.assign({}, u, { active: true }) : u,
);
console.log(updatedUsers[0]);
// Output: { id: 1, name: 'Alice', active: true }

// 5. Practical (Object): Merge default configuration with custom options
function createChart(customOptions) {
  const defaultOptions = {
    type: "bar",
    width: 600,
    height: 400,
    animate: true,
  };
  return Object.assign({}, defaultOptions, customOptions);
}
const myChart = createChart({ width: 800, animate: false });
console.log(myChart);
// Output: { type: 'bar', width: 800, height: 400, animate: false }
