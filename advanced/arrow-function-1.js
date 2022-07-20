//==================================================================
//short hand
const squareShortHand = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(squareShortHand(5))


//==================================================================
//filtering andd sorting
const people = [{
    name: 'Andrew',
    age: 27
}, {
    name: 'Vikram',
    age: 31
}, {
    name: 'Jess',
    age: 22
}]

// long function
// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

//short arrow function
const under30 = people.filter((person) => person.age < 30)
console.log(under30)

const person = people.find((person) => person.age === 22)
console.log(person.name)

//sort in place ascending 
people.sort((personA, personB) => personA.age - personB.age);
console.log(people);

//return array with result of map called on each item
console.log(people.map(person => `${person.name} is ${person.age} years old`))

//create an array of names (map), then concatenate names into one string (reduce)
console.log(people.map(person => person.name).reduce((previousName, currentName) => `${previousName} , ${currentName}`))
