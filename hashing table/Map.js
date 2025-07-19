/**
 * keys should be unique
 * can have duplicates values
 */

const map = new Map();

map.set("name", "sachin");
map.set("age", 29);
map.set("isPassed", true)
map.set("contact", [58, 569])
map.get("name")

console.log(map.size)
console.log(map.has("name"))

for (let [key, value] of map) {
    console.log(`${key}=>${value}`)
}

// all keys
for (let key of map.keys()) {
    console.log(key)
}

// all values

for (let value of map.values()) {
    console.log(value)
}