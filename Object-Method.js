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

// Object.freeze()
// Freezes an object so its properties cannot be added, removed, or changed.

// 1. Simple Object: Lock property values
const constants = { PI: 3.14159 };
Object.freeze(constants);
constants.PI = 3; // Fails
console.log(constants.PI);
// Output: 3.14159

// 2. Array: Freeze an array to prevent push/pop/mutations
const permissions = ["READ", "WRITE"];
Object.freeze(permissions);
// permissions.push("EXECUTE"); // Throws error in strict mode
console.log(permissions);
// Output: ['READ', 'WRITE']

// 3. Array of Objects: Freeze an array containing objects
const roles = Object.freeze([
  { id: 1, title: "Admin" },
  { id: 2, title: "Guest" },
]);
// roles.push({ id: 3, title: "User" }); // Blocked (Array is frozen)
console.log(roles.length);
// Output: 2

// 4. Object: Check if object/array is frozen
const config = { api: "https://api.com" };
console.log(Object.isFrozen(config)); // Output: false
Object.freeze(config);
console.log(Object.isFrozen(config)); // Output: true

// 5. Practical (Object Enum): Immutable state constants for business logic
const ORDER_STATUS = Object.freeze({
  PENDING: "STATUS_PENDING",
  PROCESSING: "STATUS_PROCESSING",
  DELIVERED: "STATUS_DELIVERED",
});

function processOrder(status) {
  if (status === ORDER_STATUS.DELIVERED) {
    return "Order is complete.";
  }
  return "Order in progress.";
}
console.log(processOrder(ORDER_STATUS.DELIVERED));
// Output: "Order is complete."

// Object.seal()
// Seals an object so new properties cannot be added or existing properties deleted.
// However, existing properties can still be modified.

// 1. Simple Object: Allow value updates, block property additions/deletions
const point = { x: 10, y: 20 };
Object.seal(point);
point.x = 15; // Allowed
point.z = 30; // Blocked
delete point.y; // Blocked
console.log(point);
// Output: { x: 15, y: 20 }

// 2. Array: Seal an array (allows changing existing elements, blocks resize)
const scores2 = [80, 90, 95];
Object.seal(scores2);
scores2[0] = 85; // Allowed
// scores.push(100); // Error: cannot add elements
console.log(scores2);
// Output: [85, 90, 95]

// 3. Array of Objects: Seal individual items inside an array
const inventory2 = [
  { id: "A1", qty: 10 },
  { id: "B2", qty: 20 },
].map((item) => Object.seal(item));

inventory2[0].qty = 15; // Allowed: update existing property
inventory2[0].price = 5; // Blocked: cannot add new field
console.log(inventory2[0]);
// Output: { id: 'A1', qty: 15 }

// 4. Object: Inspect if sealed
const user3 = { name: "Alex" };
console.log(Object.isSealed(user3)); // Output: false
Object.seal(user3);
console.log(Object.isSealed(user3)); // Output: true

// 5. Practical (Class/Object): Enforce rigid shape for class instances
class UserSession {
  constructor(userId, token) {
    this.userId = userId;
    this.token = token;
    this.lastActive = Date.now();
    Object.seal(this); // Lock shape so dynamic fields can't be added accidentally
  }
}

const session = new UserSession(42, "abc-123");
session.lastActive = Date.now(); // Works
session.unauthorizedField = true; // Fails
console.log(session.unauthorizedField);
// Output: undefined

// Object.create()
// Creates a new object using another object as its prototype.

// 1. Simple Object: Create object with prototype inheritance
const animal = {
  sound: "noise",
  makeNoise() {
    return this.sound;
  },
};
const dog = Object.create(animal);
dog.sound = "Woof";
console.log(dog.makeNoise());
// Output: "Woof"

// 2. Object with Property Descriptors: Create object and set descriptors
const car = Object.create(
  {},
  {
    wheels: { value: 4, enumerable: true },
    brand: { value: "Ford", enumerable: true },
  },
);
console.log(car);
// Output: { wheels: 4, brand: 'Ford' }

// 3. Pure Dictionary Object: Create an object without any prototype (`null`)
const pureMap = Object.create(null);
pureMap.key = "Value";
console.log(pureMap.toString);
// Output: undefined (does not inherit Object.prototype methods!)

// 4. Array Prototype Inheritance: Inherit custom array-like behaviors
const arrayLikeProto = {
  first() {
    return this[0];
  },
};
const customList = Object.create(arrayLikeProto);
customList[0] = "First Item";
customList.length = 1;
console.log(customList.first());
// Output: "First Item"

// 5. Practical (Array of Objects): Factory function creating items sharing prototype methods
const productPrototype = {
  getDiscountPrice(discountPercent) {
    return this.price * (1 - discountPercent);
  },
};

function createProduct(id, name, price) {
  const prod = Object.create(productPrototype);
  prod.id = id;
  prod.name = name;
  prod.price = price;
  return prod;
}

const productCatalog = [
  createProduct(1, "Shirt", 50),
  createProduct(2, "Pants", 80),
];

console.log(productCatalog[0].getDiscountPrice(0.1));
// Output: 45

// Object.hasOwnProperty()
// Checks whether an object has a specified property as its own property.
// Returns true if the property exists directly on the object; otherwise, returns false.

// 1. Simple Object: Check direct property ownership
const user4 = { name: "David" };
console.log(Object.hasOwnProperty(user4, "name")); // Output: true
console.log(Object.hasOwnProperty(user4, "toString")); // Output: false (inherited from prototype)

// 2. Array: Check if index exists as own property
const items = ["A", "B", "C"];
console.log(Object.hasOwnProperty(items, 1)); // Output: true
console.log(Object.hasOwnProperty(items, 5)); // Output: false

// 3. Inherited Object: Differentiate own properties from prototype properties
const parent = { inherited: "from parent" };
const child = Object.create(parent);
child.ownField = "from child";

console.log(Object.hasOwnProperty(child, "ownField")); // Output: true
console.log(Object.hasOwnProperty(child, "inherited")); // Output: false

// 4. Array of Objects: Filter objects that contain specific own properties
const records = [
  { id: 1, tags: ["tech"] },
  { id: 2 },
  { id: 3, tags: ["news"] },
];
const recordsWithTags = records.filter((item) =>
  Object.hasOwnProperty(item, "tags"),
);
console.log(recordsWithTags.length);
// Output: 2

// 5. Practical (Object): Safe payload parsing (Prototype Pollution Defense)
function extractAllowedData(inputData, allowedKeys) {
  const cleanData = {};
  for (const key of allowedKeys) {
    // Check direct property presence to avoid reading untrusted prototype properties
    if (Object.hasOwnProperty(inputData, key)) {
      cleanData[key] = inputData[key];
    }
  }
  return cleanData;
}

const payload = Object.create({ maliciousProto: true });
payload.username = "alice_dev";

console.log(extractAllowedData(payload, ["username", "maliciousProto"]));
// Output: { username: 'alice_dev' }

// Object.getPrototypeOf()
// Returns the prototype of a specified object.
// The prototype is the object from which the specified object inherits properties and methods.

// 1. Simple Object: Get prototype of plain object
const obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype);
// Output: true

// 2. Array: Get prototype of an array
const arr = [1, 2, 3];
console.log(Object.getPrototypeOf(arr) === Array.prototype);
// Output: true

// 3. Object.create(): Verify prototype reference
const parent2 = { role: "base" };
const child = Object.create(parent2);
console.log(Object.getPrototypeOf(child) === parent2);
// Output: true

// 4. Array of Objects: Inspect common prototype of instances in an array
class Task {
  constructor(title) {
    this.title = title;
  }
}
const taskList = [new Task("Task 1"), new Task("Task 2")];

console.log(Object.getPrototypeOf(taskList[0]) === Task.prototype);
// Output: true
