//way-1
function sayHi()
{
    console.log("Hello world");
}
const clicked = () => console.log("Cart Clicked");

//way-2
// const h1 = document.querySelector('h1')
// h1.onclick = sayHi
// h1.onclick = function()
// {
//     console.log("second HIii");
// } //only second func will be called


//way-3
// h1.addEventListener('click', sayHi)
// h1.addEventListener('click', function()
// {
//     console.log("Second Hiiii");
// })

const container = document.querySelector('.container')
const card = document.querySelector('.card')
let i = 1
card.addEventListener('click', function()
{
    console.log("Card Clicked");
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = i
    i++
    container.appendChild(newCard)
    
})


