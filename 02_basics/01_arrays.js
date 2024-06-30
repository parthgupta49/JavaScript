
// array
// shallow copy - shallow copy of an obj share the same reference point
// deep copy - don't share the same reference
// const myArr = [0,23,43,2,4,true,"Parth"] // can contain values of diff datatypes as well

// const myArr1 = myArr
// console.log(myArr[0]);
// myArr1[0] = "Pg"
// console.log(myArr[0]); // as this was a shallow copy the reference remain the same and the same object is being changed 

// console.log(typeof myArr);
// console.log(myArr);

// methods of arrays



const newArray = [1, 2, 3, 4, 5]
// #push and #pop used to add and remove the elements of an array at the end
// Array.push() returns the new length of the array.
// Array.pop() returns the removed element from the array
// newArray.push(5)
// newArray.push(62)
// const newLength = newArray.pop()
// console.log(newLength);
// console.log(newArray);

// #unshift and #shift method
// unshift and shift are used to add and remove the element from the start of the array
// unshift add the ele at the start
// shift remove the ele from the start
newArray.unshift(89)
const ret = newArray.shift()
// console.log('Array after shift method :',ret);

// #includes method
// console.log('includes method of the array always returns a boolean value like this one',newArray.includes(5));
// console.log('includes method of the array always returns a boolean value like this one',newArray.includes(3));

// #indexOf method
// console.log("indexOf method returns the index of the argument, if its not then returns -1 ",newArray.indexOf(3));
// console.log("indexOf method returns the index of the argument, if its not then returns -1 ",newArray.indexOf(31));


// #join method
// Syntax : 
// join()
// join(separator)
// gives the array as strings
// also can give the customised seperator to seperate the array with a customized seperator
// console.log(newArray.join("-"));

// #slice and #splice

const anotherArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(anotherArray.join(' '));
// #slice method
// console.log("Original Array :\n\n",anotherArray);
// console.log("Slice does this .slice(1,5): ",anotherArray.slice(1,5));
// console.log("After slice :\n\n",anotherArray);
// slice practice:
const letSeeSlice = anotherArray.slice(1, 5);
console.log(letSeeSlice);
letSeeSlice[1] = 59
console.log(letSeeSlice);
console.log("After slice :\n",anotherArray.join());

// #splice method
const yeNayaArrayHai = anotherArray.splice(1, 5);
// # Syntax
// splice(start)
// splice(start, deleteCount) => deleteCount basically means how many ele we wanna remove
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)
// # Return value
// An array containing the deleted elements.
// If only one element is removed, an array of one element is returned.
// If no elements are removed, an empty array is returned.


// console.log("splice method does this : ",yeNayaArrayHai);
// console.log("After Array :\n\n",anotherArray);
// splice practice: 

const letSeeSplice = ["Monday", "Tuesday", "Thrusday", "Friday", "Saturday", "Sunday"]

// console.log(letSeeSplice.splice(3));
// console.log(letSeeSplice.splice(2,0,"Wednesday"));
// console.log(letSeeSplice);
// console.log(letSeeSplice.splice(2,1))
// console.log(letSeeSplice.join());



// foreach
// const grades = [10, 8, 13];

// grades.forEach((grade,index,array) => {
//     console.log(`${grade} index is : ${index} array is : ${array}`);
// });

let arr1 = [12, 3, 3]
let arr2 = [12232, 3, 3]
arr1.unshift(12345)
let arr3 = [...arr1, ...arr2]
// let myObj = arr3.values()

// for (const oneValue of myObj) {
//     console.log(oneValue);  
// }
// for (const [index,value] of arr3.values()) {
//     console.log(`${index} : ${value}`);
// }
const arr = ["a", "b", "c", "d", "e"];
// values()
// const values = arr.values();
// for (const letter of values) {
//   console.log(letter);
//   break;
// }
// // "a" "b" "c" "d" "e"
// for (const letter of values) {
//   console.log(letter);
// }

// for (const letter of values) {
//   console.log(letter);
// }
// entries
// let iterator = arr.entries()

// for (const [index,value] of arr.entries()) {
//     console.log(`${index} : ${value}`);
// }

// every()

let marks = [99, 98, 76, 65, 75, 33, 90]

// let checkMarks = (mark) => {return mark > 40}

// console.log(marks.every(checkMarks));

// fill()
//Syntax : 
// fill(value)
// fill(value, start)
// fill(value, start, end)

// return values
// it returns the modified array
// console.log(marks.fill(99,3,5));


// filter()
// it will filter out the elements based on the condition provided in the callback function

// return value : 
// Shallow copy - it returns all the elements which passes the test
// console.log(marks.filter( (mark)=> mark>70));


// findLast()
// it will checks the array in reverse order and gives the element that satisfy the condition provided in the callback function but from the back

// return value: 
// it will return the first element which passes the condition else undefined
// console.log(marks.findLast((mark)=>mark>60));

// findLastIndex()
// it will give the index instead of giving the element itself and everthing same as above method
// console.log(marks.findLastIndex((mark)=>mark>60));



// let arrToFLat = [23,23,23,4,[34,34,[645]],45,4]
// console.log(arrToFLat.flat(Infinity));

// flatMap()

// console.log(marks.flatMap((grade) => grade===75 ? [90,[76,99],90] : 1))

// Array.from()
// 
// let str = "32456899"
// console.log(Array.from(str, (strNum) => {
//     return parseInt(strNum)
// }))


// Array.of()
// console.log(Array.isArray(Array.of()));

// reverse()
console.log(marks.reverse());


// some()
// if atleast one element is satisfying the condition provided in the callback function of some() then, it return true
console.log(marks.some((mark)=>mark<40));