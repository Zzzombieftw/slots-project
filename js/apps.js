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
// --------const------------

let turn 
let amountLeft = 100

const slots = document.querySelectorAll("slot-number")

let eArr = [0x1F600, 0x1F604, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,
    0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 0x1F5FA, 0x23F0, 0x1F579, 0x1F4DA,
    0x1F431, 0x1F42A, 0x1F439, 0x1F424]
let newArr = []


// --------variables-------------

// const gameBoard = document.getElementById(".allSlots")
// const gameStatus = document.getElementById("gameStauts")
// const startBtn = document.getElementById("start")
// const resetBtn = document.getElementById("reset")



// ---------------eventlistners----------

// add eventlistener to start button
// connect the elemants on the screen to a random number and make it appear in the box
// make win condoition by adding up the numbers and if they are qually display message

            
            // -----------functions----------

 //make a random number function  
function randomNum() {
    return Math.floor(Math.random() * 3) + 1;
}
// a function to alwasy get the id of the slot elemants
function getEl(id) {
    return document.getElementById(id)
}
function spin() {
    const slot1 = getEl('slot1')
    const slot2 = getEl('slot2')
    const slot3 = getEl('slot3')
    const slot4 = getEl('slot4')
    const num1 = randomNum()
    const num2 = randomNum()
    const num3 = randomNum()
    const num4 = randomNum()
    slot1.innerHTML = `${num1}`
    slot2.innerHTML = `${num2}`
    slot3.innerHTML = `${num3}`
    slot4.innerHTML = `${num4}`
    slot1.classList.add('animated', 'pulse')

if (num1 === num2 && num1 === num3 && num1 == num4) {
    
    showMessage();
} else {
    hideMessage();
}if(num1 != num2 && num1 != num3){
}} 

function showMessage() {
    const msg = document.getElementById("message")
    msg.style.display = "block"
    msg.classList.add('animated', 'pulse')
}

function hideMessage() {
    const msg = document.getElementById("message");
    msg.style.display = "none";
}

eArr.forEach((e)=>{
parseInt(e)
newArr.push(e)
})
           












