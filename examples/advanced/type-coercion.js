// Type Coercion - a string, a number, a boolean
//false is converted to 0 and true to 1

const value = false + 12
const type = typeof value
console.log(type) //number
console.log(value)// 12