if (true) {
    var name = 'Andrew'
    let age = 26
}
console.log(name) // Will print: Andrew 
//console.log(age) // Will print: ReferenceError age is not defined


const setupVariables = () => {
    var name = 'Andrew'//var is function scope
    let age = 26
}
setupVariables()
//console.log(name) // Will print: ReferenceError because var is function scope
//console.log(age) // Will print: ReferenceError


var name = 'Andrew'
var name = 'Mike'
console.log(name) // Will print: Mike

//Hoisting
age = 6
console.log(age) // Will print: 6 
var age  // because of Hoisting, js moves (hoists) declaration in this line to the top
//same with functions
//var is not recommended at all