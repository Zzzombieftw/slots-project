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
const slots = document.querySelectorAll("slot-number")
const msg = document.getElementById("message")
const score = document.getElementById("score") 
const button100 = document.getElementById("b100")
const button20 = document.getElementById("b20")
const button50 = document.getElementById("b50")
const stastus = document.getElementById("re")
const resetBtn = document.getElementById("reset")

const emoji0 = '🍎';
const emoji1 = '📓';
const emoji2  = '💀';
const emoji3  = '🖊️';


// --------variables-------------




// ---------------eventlistners----------
button100.addEventListener("click",(e)=>{
    const slot1 = getEl('slot1')
    const slot2 = getEl('slot2')
    const slot3 = getEl('slot3')
    const slot4 = getEl('slot4')
    const num1 = randomNum()
    const num2 = randomNum()
    const num3 = randomNum()
    const num4 = randomNum()
    slot1.innerHTML = eval("emoji" + num1)
    slot2.innerHTML = eval("emoji" + num2)
    slot3.innerHTML = eval("emoji" + num3)
    slot4.innerHTML = eval("emoji" + num4)
    // all 4 coreect u double your money
    if (num1 === num2 && num1 === num3 && num1 == num4) {
        stastus.style.color ="#0bcf36"
        score.value = parseInt(score.value) + 400
        stastus.innerHTML="You Won $200"
        showMessage()
        // if three match u get half the money u put
    }else if(num1 != num2 && num2 === num3 && num3 == num4){
        stastus.style.color ="#0bcf36"
        score.value = parseInt(score.value) + 50
        stastus.innerHTML="You Won $50"
        showMessage()
    }else if(num1 === num2 && num2 === num3 && num3 != num4){
        stastus.style.color ="#0bcf36"
        score.value = parseInt(score.value) + 50
        stastus.innerHTML="You Won $50"
        showMessage()
        // if u match two u get a quater of what u put 
    }else if(num1 === num3 && num2 === num4){
        stastus.style.color ="#0bcf36"
        score.value = parseInt(score.value) + 25
        stastus.innerHTML="You Won $25"
        showMessage()
        //if you dont get a match you lose half the money u put in 
    }else if(score.value >= 0){
        score.value = parseInt(score.value) - 50
        hideMessage()
    }else if(score.value <= 0){
        button100.disabled = true
        button50.disabled = true
        button20.disabled = true
        stastus.style.color = "#990000"
        stastus.innerHTML = "YOU LOST PRESS RESTART"

    }else{
        hideMessage() 

}})
button20.addEventListener("click",(e)=>{
    const slot1 = getEl('slot1')
    const slot2 = getEl('slot2')
    const slot3 = getEl('slot3')
    const slot4 = getEl('slot4')
    const num1 = randomNum()
    const num2 = randomNum()
    const num3 = randomNum()
    const num4 = randomNum()
    slot1.innerHTML = eval("emoji" + num1)
    slot2.innerHTML = eval("emoji" + num2)
    slot3.innerHTML = eval("emoji" + num3)
    slot4.innerHTML = eval("emoji" + num4)
    if (num1 === num2 && num1 === num3 && num1 == num4) {
        stastus.style.color ="#0bcf36"
        score.value = parseInt(score.value) + 60
        stastus.innerHTML="You Won $40"
        showMessage()
    }else if(num1 != num2 && num2 === num3 && num3 == num4){
        stastus.style.color ="#0bcf36"
        score.value = parseInt(score.value) + 10
        stastus.innerHTML="You Won $10"
        showMessage()
    }else if(num1 === num2 && num2 === num3 && num3 != num4){
        stastus.style.color ="#0bcf36"
        score.value = parseInt(score.value) + 10
        stastus.innerHTML="You Won $10"
        showMessage()
    }else if(num1 === num3 && num2 === num4){
        stastus.style.color ="#0bcf36"
        score.value = parseInt(score.value) + 5
        stastus.innerHTML="You Won $5"
        showMessage()
        
    }else if(score.value >= 0){
        score.value = parseInt(score.value) - 10
        hideMessage()
    }else if(score.value <= 1){
        stastus.style.color = "#990000"
        stastus.innerHTML = "YOU LOST PRESS RESTART"
        button100.disabled = true
        button50.disabled = true
        button20.disabled = true
    }else{
        stastus.innerHTML="winnner big"
        hideMessage() 
        
        
}})    
resetBtn.addEventListener("click",()=>{
    button100.disabled = false
    button50.disabled = false
    button20.disabled = false
    score.value = 100
    stastus.style.color = "white"
    stastus.innerHTML = "PlACE A BET AND WIN BIG!!"
})  
   


// -----------functions----------
//make a random number function  
 function randomNum() {
    return Math.floor(Math.random() * 4) 
}
// a function to alwasy get the id of the slot elemants
function getEl(id) {
    return document.getElementById(id)
}

function bett50() {
    const slot1 = getEl('slot1')
    const slot2 = getEl('slot2')
    const slot3 = getEl('slot3')
    const slot4 = getEl('slot4')
    const num1 = randomNum()
    const num2 = randomNum()
    const num3 = randomNum()
    const num4 = randomNum()
    slot1.innerHTML = eval("emoji" + num1)
    slot2.innerHTML = eval("emoji" + num2)
    slot3.innerHTML = eval("emoji" + num3)
    slot4.innerHTML = eval("emoji" + num4)
    if (num1 === num2 && num1 === num3 && num1 == num4) {
        stastus.style.color ="#0bcf36"
        score.value = parseInt(score.value) + 200
        stastus.innerHTML="You Won $100"
        showMessage()
    }else if(num1 != num2 && num2 === num3 && num3 == num4){
        stastus.style.color ="#0bcf36"
        score.value = parseInt(score.value) + 25
        stastus.innerHTML="You Won $25"
        showMessage()
    }else if(num1 === num2 && num2 === num3 && num3 != num4){
        stastus.style.color ="#0bcf36"
        score.value = parseInt(score.value) + 25
        stastus.innerHTML="You Won $25"
        showMessage()
    }else if(num1 === num3 && num2 === num4){
        stastus.style.color ="#0bcf36"
        score.value = parseInt(score.value) + 12.50
        stastus.innerHTML="You Won $12.50"
        showMessage()
        
    }else if(score.value >= 0){
        score.value = parseInt(score.value) - 20
        hideMessage()
    }else if(score.value <= -1){
        stastus.style.color = "#990000"
        stastus.innerHTML = "YOU LOSTTT PRESS RESTART"
        button20.disabled = true
        button100.disabled = true
        button50.disabled = true
        
    }else{
        hideMessage() 
        
        
    slot1.classList.add('animated', 'pulse')
}}

    
function showMessage() {
    msg.style.display = "block"
     msg.classList.add('animated', 'pulse')
}
    
 


 function hideMessage() {
    msg.style.display = "none"
    
}

// able all the buttons and set money back to 100
function blow(e) {
    button100.disabled = false
    button50.disabled = false
    button20.disabled = false
    score.value = 100
    hideMessage()
}

