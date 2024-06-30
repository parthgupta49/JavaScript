const accountId = 1234
let accountEmail = "parthgupta@gmail.com"
var accountPassword = "1234"
accountCity = "Firozabad"

let accountState;
// we prefer nowdays to use only "let" keyword rather than "var" keyword cze of issue in block scope and functional scope
// accountId = 23 -> this is a constant so can'be reassigned

accountEmail = "thisemail@gmail.com"
accountPassword = "thisIsMyPassword"
// console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
