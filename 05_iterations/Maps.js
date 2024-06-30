// Maps
// Maps are iterable
// stores unique values and remembers the order in which we fill it
const map = new Map()
map.set("IN", "India")
map.set("US", "United States of America")
map.set("FR", "France")
// console.log(map);
// printing map key-value pairs using forof loop
// for (const [key,value] of map) {
//     console.log(key,":-",value);
// }
// console.log(map);
// printing map using forEach loop : 
// in order to use forEach loop with maps a little bit of tweak is required as the parameter forEach receives is the opposite of what for...of loop receives so it receives the values first and then, the keys so nice little difference to ponder upon 
map.forEach( (value,key) => {
    console.log(key,":-",value);
})

// console.log(map.has("FR")) // this will check if the specified key given as argument is present in the map or not. If present it returns true else false if the key is not present in the map
// console.log(map.delete("FR")); // this will delete the key given as argument. This method returns true if successfully deleted else false.
// console.log(map.has("FR"))
console.log(map.get("FR")); // get method gives the value of the key specified in the argument else gives undefined
// map.clear() // Removes all key-value pairs from the Map object.
// for (const [key,value] of map) {
//     console.log(key,":-",value);
// }
console.log(map.size); // Returns the number of key/value pairs in the Map object.

console.log(map.keys());
console.log(map.values());