// let score = 33
// let score = "33a"
// let score = null
// let score;
// let score = true;

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score) 
/*
if the score variable stores "36" it will successfully convert it into the number
however 
if it stores "36a" then it wont be able to convert it however if we see the typeof the converted variable it will still show number as it has converted it but that is not the case over here, as we see the value for this it will show NaN => not a number
if it stores "null" as the value then when we try to convert it into a number the value will be "0" and the type will be number only 
*/
// console.log(typeof(valueInNumber));
// console.log(valueInNumber); // NaN => not a number as it was "36a" which we were trying to convert
// console.log(valueInNumber); // NaN => not a number as it was undefined which we were trying to convert

/*
"33a" => NaN

*/


// let isLoggedIn = "parth"

// let booleanLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanLoggedIn);
// console.log(booleanLoggedIn);


// ************************** Operations ************************

// console.log(2**8);
// console.log(2/3);

// let str = "6666666666666666"
// console.log(2%3);


// console.log("1" + 2);  // 12
// console.log(1 + "2");  // 12
// console.log(1 + 2 + "2");  // 32
// console.log("2" + 1 + 2);  // 212


// console.log(3+4*5%3);

/* 
operator precedence : 
                Increment Operators
# Postfix increments are executed before prefix increments

15	++	Postfix Increment	i++
15	--	Postfix Decrement	i--
14	++	Prefix Increment	++i
14	--	Prefix Decrement	--i
                
                NOT Operators

14	!	Logical NOT	!(x==y)
14	~	Bitwise NOT	~x
                
                Unary Operators

14	+	Unary Plus	+x
14	-	Unary Minus	-x
14	typeof	Data Type	typeof x
14	void	Evaluate Void	void(0)
14	delete	Property Delete	delete myCar.color

                Arithmetic Operators
# Exponentiations are executed before multiplications
# Multiplications and divisions are executed before additions and subtractions

13	**	Exponentiation ES2016	10 ** 2
12	*	Multiplication	10 * 5
12	/	Division	10 / 5
12	%	Division Remainder	10 % 5
11	+	Addition	10 + 5
11	-	Subtraction	10 - 5
11	+	Concatenation	"John" + "Doe"
*/


// console.log(+true);

// let aBoolean = true
// let aString = String(aBoolean)
// console.log(+false);
/* 
In JavaScript, when you use a unary plus operator (+) before a value, it tries to convert that value into a number.*/

// console.log(+"");        // 0





