// #Filter method

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBooks = books.filter( (book) => {
//     return book.genre === "History"
// })
const userBooks = books.filter((book) => {
    return book.publish > 1995 && book.genre === "History"
})

// console.log(userBooks);



const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbers = myNumbers.map( (number) => {
//     return number + 10
// })

// console.log(newNumbers);
// console.log(myNumbers);

// chaining of methods : 
// let newNumbers = myNumbers.
//                             map((num) => {
//                                 return num + 10
//                             })
//                             .map((num) => {
//                                 return num * 10
//                             })
//                             .filter((num) => {
//                                 return num >= 150
//                             })
// console.log(newNumbers);


// #reduce method
// let newNumbers = [1, 2, 3, 4, 5];
// let sum = newNumbers.reduce(function (acc, curr) {
//     console.log(`accumulator: ${acc} and currentValue: ${curr}`);
//     return acc + curr
// }
//     , 0); 
// let sum = newNumbers.reduce((acc, curr) => acc + curr,0);
// console.log(sum);

// const shoppingCart = [
//     { itemName: "js course", price: 3000 },
//     { itemName: "python course", price: 2000 },
//     { itemName: "java course", price: 1000 },
//     { itemName: "mobile dev course", price: 6000 },
// ]

// let priceToPay = shoppingCart.reduce((acc,item) => item.price + acc, 0);
// console.log(priceToPay);


// finding max using reduce method
// const arr = [12,3,234,53,6,90,1211];
const arr = [-12,-3,-234,-53,-6,-90,-1211];
console.log(arr.reduce( (acc,curr) => acc < curr ?  curr : acc));