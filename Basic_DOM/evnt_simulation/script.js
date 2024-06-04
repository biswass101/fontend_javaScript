const container = document.querySelector('.container')
const card = document.querySelector('.card')
const input = document.querySelector('input')
let i = 1
card.addEventListener('click', function()
{

    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = i
    i++
    container.appendChild(newCard)
    
})

setTimeout(()=>
{
    input.focus()
}, 3000)
setTimeout(()=>
{
    input.blur()
}, 4000)
// const id =  setInterval(() => {
//     if(i > 100)
//         {
//             clearInterval(id)
//         }
//     card.click()
// }, 27);


