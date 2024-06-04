const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
const card = document.querySelector('.card')
let i = 1
card.addEventListener('click', function()
{
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = i
    //way-1 form delegation-->
    // newCard.classList.add('newCard' + i);
    // newCard.addEventListener('click', () =>
    // {
    //     newCard.remove()
    // })
    i++
    container.appendChild(newCard)
})

//way-2 for event delegation 
container.addEventListener('click', (e) =>
{
    if(e.target !== container) e.target.remove()
})

//event.target returs the element from where event was fired