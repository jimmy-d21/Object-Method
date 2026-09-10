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
