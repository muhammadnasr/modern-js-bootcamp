//==================================================================
//arguments in arrow functions
const addArrow = () => {
    //arrow functions does not bind arguments are not bound to arrow funnctions
   // return arguments[0] + arguments[1] 
}

console.log(addArrow(11, 22, 33, 44))// this will print undefined

function add()  {
    return arguments[0] + arguments[1] 
}

console.log(add(11, 22, 33, 44))// this will print 33

//==================================================================
//arrow functions and this keyword
const car = {
    color: 'Red',
    getSummary() {
        return `The car is ${this.color}` 
    },
    getSummaryArrow : () => {
        //arrow functions does not bind this inside methods, actually it bind to the outer scope specially inside class methods
        return `The car is ${this.color}` 
    }
}

console.log(car.getSummary())
console.log(car.getSummaryArrow())

class Van {
    color= 'Red'
    getSummary() {
        return `The van is ${this.color}` 
    }
    getSummaryArrow = () => {
        //arrow functions bind this to the current class instance   
        return `The van is ${this.color}` 
    }
}

let van = new Van();

console.log(van.getSummary())
console.log(van.getSummaryArrow())


