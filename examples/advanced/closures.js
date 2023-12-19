
//==================================================================
//closure setter and getter
const createCounter = () => {
    //closure private variable
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())//-1

//==================================================================
//Currying, create a function of a function that have access to first function variables using closure
// Tipper
const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount
    }
}
const tip20 = createTipper(.2)
const tip30 = createTipper(.3)
console.log(tip20(100))//20
console.log(tip30(100))//30

//another way to call currying
console.log(createTipper(100)(0.6)) //60

//shorter version of arrow currying
const createTipperShorter = baseTip => amount => baseTip * amount



