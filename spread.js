function greet(greeting, ...names) {
    names.forEach(n => console.log(`${greeting}, ${n}`));
}
greet("Hello", "Sachin", "Amit", "Rahul");


let a = [1, 2], b = [3, 4];
let combined = [...a, ...b]; // [1, 2, 3, 4]

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]



let user = { name: "Alice" };
let clone = { ...user }; // ✅ Shallow clone


let { name, ...details } = { name: "Raj", age: 30, city: "Pune" };
console.log(details); // { age: 30, city: "Pune" }

