/* 1. keypress
    2. keyup
    3, keydown */

const h1 = document.querySelector('h1')
const input = document.querySelector('input')



// input.addEventListener('keypress', (event) =>
// {
//     console.log(event.key);
// })

//after making h1 focusable-->

// h1.addEventListener('keypress', (event) =>
// {
//     console.log(event.key);
// })

//most commonly used with window object

window.addEventListener('keydown', (event)=>
{
    // console.log(event);
    console.log("Code: ", event.code);
    console.log("Value: ", event.key);
})

