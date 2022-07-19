'use strict'
if (true) {
    var name1 = 'Andrew'//leaked global
    let age = 26
}
console.log(name1) // Will print: Andrew  we are in strict mode which disabled leaked global
//console.log(age) // Will print: ReferenceError age is not defined


const setupVariables = () => {
    var name2 = 'Andrew'//var is function scope
    let age = 26
}
setupVariables()
//console.log(name2) // Will print: ReferenceError because var is function scope
//console.log(age) // Will print: ReferenceError


var name3 = 'Andrew'
var name3 = 'Mike'
console.log(name3) // Will print: Mike

//Hoisting
age = 6
console.log(age) // Will print: 6 
var age  
// because of Hoisting, js moves (hoists) declaration in this line to the top
//same happen with functions

//TLDR var is not recommended at all