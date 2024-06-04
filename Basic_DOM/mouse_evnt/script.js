const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')
let i = 1
//click event
// card.addEventListener('click', function()
// {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = i++
//     container.appendChild(newCard)
// })
//mousedown event
// card.addEventListener('mousedown', function(e)
// {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = i++
//     container.appendChild(newCard)
// })

//mouseup event
// card.addEventListener('mouseup', function(e)
// {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = i++
//     container.appendChild(newCard)
// })
//mouseup enter
// card.addEventListener('mouseenter', function(e)
// {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = i++
//     container.appendChild(newCard)
// })
//mouseleave enter
// card.addEventListener('mouseleave', function(e)
// {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = i++
//     container.appendChild(newCard)
// })
//mousemove enter
// card.addEventListener('mousemove', function(e)
// {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = i++
//     container.appendChild(newCard)
// })
//mouseover enter
// card.addEventListener('mouseover', function(e)
// {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = i++
//     container.appendChild(newCard)
// })
//wheel enter
card.addEventListener('wheel', function(e)
{
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = i++
    container.appendChild(newCard)
})


