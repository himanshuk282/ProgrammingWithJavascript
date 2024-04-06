const accountId = 144553
let accountEmail = "himanshu@gmail.com"
var accountPassword = "12345"
accountCity = "Lucknow"
let accountState;

//Updating the declared variables

// accountId = 2 // not allowed as it is declared as const type

accountEmail = "himanshu@update.com"
accountPassword = "123456789"
accountCity = "Bengaluru"


/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])