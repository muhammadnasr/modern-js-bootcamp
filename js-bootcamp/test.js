let score = 5
let getNewScoreMessage = function () {
    //shadowing
    let score = 2
    return `Shadowing score: ${score}`
}
let result = getNewScoreMessage()
console.log(`${result}, Original score: ${score}`)

