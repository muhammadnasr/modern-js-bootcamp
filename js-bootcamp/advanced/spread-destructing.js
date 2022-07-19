//==================================================================
// destructing
const todo = {
    id: 'asdfpoijwermasdf',
    text: 'Pay the bills',
    completed: false
}

const printTodo = ({ text, completed }) => {
    console.log(`${text}: ${completed}`)
}
printTodo(todo)

const { text: todoText, completed, details = 'No details provided', ...others } = todo

console.log(todoText) // print Pay the bills
console.log(completed)// print false
console.log(details)//prints No details provided
console.log(others)// prints {id: 'asdfpoijwermasdf'}

const age = [65, 0, 13]
const [firstAge, ...otherAges] = age

console.log(firstAge)// prin 65
console.log(otherAges)//print [0,13]

//==================================================================
//spread

//spread function parameters
const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}
const team = {
    name: 'Libery',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}
printTeam(team.name, team.coach, ...team.players)
//prints 
//Team: Libery
//Coach: Casey Penn
//Players: Marge, Aiden, Herbert, Sherry


//spread array
let cities = ['Barcelona', 'Cape Town', 'Bordeaux']
let citiesClone = [...cities, 'Santiago']
console.log(cities) // Will print three citites
console.log(citiesClone) // Will print four citites

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}

//spread object properties
let clone = {
    ...house
}
console.log(house) // Will print the same as clone
console.log(clone) // Will print the same as house

const person = {
    name: 'Andrew',
    age: 27 
}
const location = {
    city: 'Philadelphia',
    country: 'USA'
}
const overview = {
    ...person,
    ...location,
    name: 'Mike'
}
console.log(overview)   //prints {name: 'Mike', age: 27, city: 'Philadelphia', country: 'USA'}