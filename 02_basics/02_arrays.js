const marvel_heros = [
    "thor",
    "Ironman",
    "spiderman",
    "Hulk",
    "Doc Strange",
    "Hawkaye",
  ];
  const dc_heros = ["superman", "flash", "batman"];
  
  // marvel_heros.push(dc_heros) // this will push the whole array at the end instead of picking one ele and putting it at the end, it will simply put the complete array and now to access it we have to do like the following :
  // console.log(marvel_heros[3][1])
  
  const animated_heros = ["Chota Bheem", "Doraemon", "Shinchan", "Hattori"];
  
  // const all_heros = marvel_heros.concat(dc_heros,animated_heros)
  // console.log(all_heros);
  
  const all_heros = [...marvel_heros, ...dc_heros, ...animated_heros];
  // console.log(all_heros);
  
  // #flat Method
  // The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified dept
  // syntax :
  // flat() # default is 1
  // flat(depth) #until what depth i need to break the subarrays - eg.,2,3 or infinity is also there
  // Return value
  // A new array with the sub-array elements concatenated into it
  const anotherArray = [1, 2, [3, 4], [5, [6, [7, 8]]]];
  const letJustFlatTheAboveArray = anotherArray.flat();
  // console.log(letJustFlatTheAboveArray);
  
  const mArr = new Array([2, 3, 3, 4]);
  // #isArray
  // console.log(mArr)
  // console.log(Array.isArray(mArr));
  
  // of,from
  
  let grades = [10, 8, 13, 13, 13];
  
  // console.log(grades.filter(moreGrade))
  // function moreGrade(grade) {
  //   return grade > 8;
  // }
  
  let newArr = grades.map((grade) => {
    return grade + 1;
  });
  
  // console.log(newArr);
  
  // function sayName(name="steve") {
  //     console.log(name);
  // }
  
  // sayName("hello");
  
  // const oneGrade = grades.find((grade, index) => {
  //   if (grade > 10) {
  //     return { grade: grade, index: index };
  //   }
  // });
  
  // console.log(oneGrade);
  
  // grades = [10, 8, 13, 13, 13];
  
  const sumOfGrades = grades.reduce(function(acc,currentValue){
      return acc+currentValue
  },0)
  
  // console.log(sumOfGrades);
  
  let myArr = [12,23,3453,56]
  myArr = []
  myArr[1] = 34567;
  myArr[2] = 67;
  
  // console.log(myArr);
  
  
  const array = [15, 16, 17, 18, 19];
  
  // const a = array.reduce((acc,currentValue) => acc < currentValue ? currentValue : acc)
  
  // console.log(a);

  // console.log(array.reduce((acc,curr)=>{
  //   return acc + curr
  // }))
  let max = array.reduce((min,curr)=>curr<min ? curr : min
  )
  console.log(max);
  // how to empty an array?
  let numbers = [1,2,34,3,5]
  // console.log(numbers);
  // numbers.length = 0
  // console.log(numbers);
  // numbers.splice(0,numbers.length)
  // console.log(numbers);

// numbers = [56,445,62,12,3,2]
// numbers.sort((a, b) => a - b)
// console.log(numbers);

