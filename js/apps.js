// --------const------------

let turn 
let amountLeft = 100







// --------variables-------------
const reel1 = document.getElementById("#slot1")
const reel2 = document.getElementById("#slot2")
const reel3 = document.getElementById("#slot3")
const gameBoard = document.getElementById(".allSlots")
const gameStatus = document.getElementById("gameStauts")
const num1 = randomNum()
const num2 = randomNum()
const num3 = randomNum()


console.log(num1)
// ---------------eventlistners----------
// gameBoard.addEventListener("click",spinReels())



// -----------functions----------
function start(){
    
}



function spinReels(){

}

function startlever() {
    
}

function render() {
    
}


function winner (params) {
    reel1.innerHTML = `${num1}`
    reel2.innerHTML = `${num2}`
    reel3.innerHTML = `${num3}`
    if(reel1 === reel2 && reel2 === reel3){
        amountLeft = `${amountLeft}` + 3
        console.log("you won")
    } else {
        console.log("you lost")
    }
    render()
    
}


function randomNum(params) {
    return Math.floor(Math.random()* 5) + 1
}