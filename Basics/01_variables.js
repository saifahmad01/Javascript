const Mobno = 8765357687
let Email = "Saif_Ahmad@google.com"
var Password = "x1234"
City = "Jamshedpur"
let State;

accountId = "Saif_Ahmad"
accountEmail = "Saif@.com"
accountPassword = "y883282"
accountCity = "Jamshedpur"

console.log("General informations");
console.table([Mobno, Email, Password, City, State])

console.log("Account informations");
console.table([accountId, accountEmail, accountPassword, accountCity])

/* Note:
Using `let` rather than `var` in JavaScript provides block scoping, prevents variable hoisting, and helps catch bugs early due to the temporal dead zone. It also offers clearer intent and behavior in code.
*/