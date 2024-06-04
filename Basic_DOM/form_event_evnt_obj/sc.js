const userNameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')
const form = document.querySelector('form')
//single clikc event-->
// userNameInput.addEventListener('click', ()=>
// {
//     console.log("input filed clicked");
// })

//double click event-->
// userNameInput.addEventListener('dblclick', ()=>
// {
//     console.log("input filed clicked");
// })


//input event--> it works while typing in input filed
// userNameInput.addEventListener('input', (event)=>
// {
    // console.log(event.data);
    // console.log(event.target.value); //getting value from ipt field
    // paragraph.innerText = event.target.value
// })


//change event--> it works while typing in input filed then exit
// userNameInput.addEventListener('change', (event)=>
// {
//     // console.log(event.data);
//     // console.log(event.target.value); //getting value from ipt field
//     paragraph.innerText = event.target.value
// })

//focus event-->
// userNameInput.addEventListener('focus', (event)=> //works on focus in ipt filed
// {
//     console.log(event.type);
//     // console.log(event.target.value); //getting value from ipt field
//     paragraph.innerText = event.target.value
// })
//blur event-->
// userNameInput.addEventListener('blur', (event)=> //works on blur in ipt filed
// {
//     console.log(event.type);
//     // console.log(event.target.value); //getting value from ipt field
//     paragraph.innerText = event.target.value
// })

//whole form has a event that is submit event
// form.addEventListener('submit', (event) =>
// {
//     event.preventDefault() // form observing the submit event object
//     console.log("form Submitted");
// })
form.addEventListener('click', (event) =>
{
    event.preventDefault() // form observing the submit event object
    console.log("form clicked");
    console.log(event.target);
})

