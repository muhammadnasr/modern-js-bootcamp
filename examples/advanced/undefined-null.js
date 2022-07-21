
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
    console.log(num)//print undefined
}

let result = square()
console.log(result) // print undefined

// Null as assigned value
let age = 27
age = null
console.log(age) // print null

let a = null
let b 
console.log(a === b);// false null does not equal undefined
console.log(a == b); //true 