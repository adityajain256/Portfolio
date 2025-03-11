let bc = document.getElementById('btn3')
let cards = document.querySelector('.card')
let cards2 = document.querySelector('.card2')
let bt1 = document.getElementById('button1')

let bt2 = document.getElementById('button2')
let cards1 = document.querySelector('.card1')
// let show = document.querySelector('.hide')
let nbtn1 = document.getElementById('buttn1')

let nbtn2 = document.getElementById('buttn2')

bc.addEventListener('click',()=>{
    // alert('aditya')
    cards.classList.toggle("hide")

})



bt1.addEventListener('click',()=>{
    cards2.classList.toggle("chide")
    cards1.classList.add('chide')

})

bt2.addEventListener('click',()=>{
    cards2.classList.add("chide")
    cards1.classList.toggle("chide")

})

nbtn1.addEventListener('click',()=>{
    cards2.classList.toggle("chide")
    cards1.classList.add('chide')
})


nbtn2.addEventListener('click',()=>{
    cards2.classList.add("chide")
    cards1.classList.toggle("chide")
})