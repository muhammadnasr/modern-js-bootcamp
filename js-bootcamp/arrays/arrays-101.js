// Array of mixed types
const data = [true, 12, 'Andrew']

//push, unshift, pop, shift
const nums = [1, 2, 4]
nums.push(12) // add to the end
nums.unshift(3) // add to the begining
console.log(nums) // Will print [3, 1, 2, 4, 12]


nums.pop()// remove from the end
nums.pop()
nums.shift()// remove from the begining
console.log(nums) // Will print [1,2]

//add and/or remove items using splice, if deleteCount is 0 it will delete
//splice(start, deleteCount, item1, item2, itemN)
nums.splice(0, 1, 10, 20)
console.log(nums) // Will print [10,20,2]



