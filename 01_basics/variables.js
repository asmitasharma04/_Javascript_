const accountId=144553//value cannot be changed
let accountEmail="asmita@gmail.com"
var accountPasswprd="12345"
accountCity="Hoshiarpur"
let accountState;//it will give output undefined
// accountId=2   not allowed
accountEmail="hc@h.com"
accountPassword="21323444"
accountCity="Bangluru"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])

//to declare variables we can both let and var
//let :its scope is limited to curly braces  but var is not 
// Re-declaration: var can be re-declared in the same scope; let cannot.
//  so it is advised to use let rather than var

// javascript is a safe language it can be used to store something without variables ..yes it can store but it is not recomended to do so 