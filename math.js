//Own code
let hands = ["rock", "paper", "scissor"]

function randomize(){
    let i = Math.floor(Math.random() * 4)
    console.log(hands[i])
}

randomize()

//Code from Scrimba with other possibility of Scrimba
let hands = ["rock", "paper", "scissor"]

function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}

console.log( getHand() )