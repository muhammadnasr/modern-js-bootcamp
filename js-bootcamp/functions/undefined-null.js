
let name // Undefined for variable

//name = 'Jen'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Undefined for function arguments
// Undefined as function return default value
let square = function (num) {
    console.log(num)
}

let result = square()//print undefined
console.log(result) // print undefined

// Null as assined value
let age = 27
age = null
console.log(age) // print null
let a = null
let b 
console.log(a === b);// false
console.log(a == b); //true