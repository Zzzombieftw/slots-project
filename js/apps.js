// --------const------------

// let turn 
// let amountLeft = 100
// let board = []






// // --------variables-------------
// // const reel1 = document.getElementById("#slot1")
// // const reel2 = document.getElementById("#slot2")
// // const reel3 = document.getElementById("#slot3")
// const gameBoard = document.getElementById(".allSlots")
// const gameStatus = document.getElementById("gameStauts")
// const startBtn = document.getElementById("start")
// const resetBtn = document.getElementById("reset")



// // ---------------eventlistners----------
// // gameBoard.addEventListener("click",spinReels())
// // add eventlistener to start button
// // connect the elemants on the screen to a random number and make it appear in the box
// // make win condoition by adding up the numbers and if they are qually display message
// startBtn.addEventListener("click",()=>{
//     // const item1 = getElement('#slot1');
//     // const item2 = getElement('#slot2');
//     // const item3 = getElement('#slot3');

//     const num1 = randomNum();
//     const num2 = randomNum();
//     const num3 = randomNum();

    
//     // reel1.innerText = `${num1}`;
//     // reel2.innerHTML = `${num2}`;
//     // reel3.innerHTML = `${num3}`;

// // let newNum1 = reel1 + num1
// // let newNum2 = reel2 + num2
// // let newNum3 = reel3 + num3
// if(newNum1 + newNum2 + newNum3 === 3){
//     amountLeft = `${amountLeft}` + 3
//     gameStatus.innerHTML = `you won ${amountLeft}` 
    
// }else if(newNum1 + newNum2 + newNum3 === 6){
//     amountLeft = `${amountLeft}` + 6
//     gameStatus.innerHTML = `you won ${amountLeft}`

// }else if(newNum1 + newNum2 + newNum3 === 9){
//     amountLeft = `${amountLeft}` + 9
//     gameStatus.innerHTML = `you won ${amountLeft}` + 9
// }else {
//     gameStatus.innerHTML = "you lost 1000 dollars "
// }
// render()
// console.log(newNum1, newNum2, newNum3)
// })
// resetBtn.addEventListener("click",()=>{
    
 
// amountLeft = 100



// render()    

// } )


// // -----------functions----------
// function start(){
//     let reel1 = 0 
//     let reel2 = 0 
//     let reel3 = 0 
//     render() 
// }
// start()
// function getElement(id) {
//     return document.getElementById(id);
// }






// function render() {
//     for (let i = 0; i < board.length; i++) {
        
//     }
// }


// function winner () {
    
    
// }


// function randomNum(params) {
//     return Math.floor(Math.random()* 4) + 1
// }

// /SLOTS MACHINE 
//player will start with 100 dollars 
// 1. define const for the money, for each element in the slots, etc.
//2. cache all the html elements so i will be able to render all the random numbers for inside the slots and be able to change their color and be able to see how much money the person betts in(slots, money bet, )
//3. set click events to lever which will start the slots and swing down the lever
//4. create start function  so the slots will generate a random number between 1-5, this function will controll how fast it spins, the elements represented in the slots, and how much money the user has betted   (want it to be pictures but want it to work first before adding other stuff)
//5. use -webkit-keyframs or try flexbox that will render inside the slots and will create a spinning animation for each columan(maybe use time intverel)(maybe add a button to allow user to stop spinning on each clouman on command)
//6. function also has to be able to match the three numbers in a row and maybe diagonal, also be  able to declare how much the person won by multpling it with the number they got 
//7. create function that takes the amount of money they bett in and multply it by the wininng combos and display it on top 
//8 create function that can tell if the player won or lost and be able to tell the user how much the player lost or made and render the message on top saying "YOUUUU WONNNN/LOSTTTT 50000"
//8.a needs to add the amount they bet to the amount they just won and play a sound if they win
//8.b player has lost when total amount is below 5
//9 make a sound function for the slots and for the lever and maybe a little background noise 
//10. create a array for the winning combo and losing combo
//10.a make each combo = a multiplier to increaes money
//10.b if player gets a losing combo or anything else besides a winning combo take away the amount they bet from total
//11.make reset button that will rest the money and clear the slots machine and the amount they had  back to 100

getRandomNumber()

function getRandomNumber() {
    return Math.floor(Math.random() * 2) + 1;
}
function getElement(id) {
    return document.getElementById(id);
}
const num1 = getRandomNumber();
function spin() {
    const item1 = getElement('item1');
    const item2 = getElement('item2');
    const item3 = getElement('item3');
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();
    item1.innerHTML = `${num1}`;
    item2.innerHTML = `${num2}`;
    item3.innerHTML = `${num3}`;
    if (num1 === num2 && num1 === num3) {
        console.log(num1, num2, num3)
        showMessage();
    } else {
        hideMessage();
    }
}
function hideMessage() {
    const msg = document.getElementById("message");
    msg.style.display = "none";
}

document.getElementById(".btnp").addEventListener( ("click",spin())

)

function hi(){
    console,log("ji")
}
console.log("it wroks")