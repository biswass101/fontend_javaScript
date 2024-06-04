const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

// window.addEventListener('click', ()=>
// {
//     console.log("6. window event listener");
// }, /*true*/)
// document.addEventListener('click', ()=>
// {
//     console.log("5. document event listener");
// }, /*true*/)
// document.body.addEventListener('click', ()=>
// {
//     console.log("4. body event listener");
// }, /*true*/)
// green.addEventListener('click', (e)=>
// {
//     // e.stopPropagation() //propagation will stop at here(green div)
//     console.log("3. green event listener");
// }, /*true*/)
// pink.addEventListener('click', ()=>
// {
//     console.log("2. pink event listener");
// }, /*true*/)
blue.addEventListener('click', (e)=>
{
    // e.stopPropagation() // it will stop the bubble propagation
    console.log("1. blue event listener");
}, /*true or {capture : true}*/ {once : true})


//3rd arg --> true --> capturing phase or reverse bubling
//3rd arg --> false(default) --> bubling phase or forward or actual bubling
//3rd arg --> can be in object form --> {capture : true} or {capture : false}
//3rd arg --> eventlister will work for one time --> {once : true}