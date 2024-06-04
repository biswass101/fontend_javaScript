const rndShape = document.querySelectorAll('.round-shape')
const getInputValue = document.querySelectorAll('input')
const realTimeProgress = document.querySelector('.progress-real-time')
const rase = document.querySelector('.raise')
const progressbar = document.querySelector('.progress-bar')
realTimeProgress.style.width = '0%'
//adding tic mark-->
// rndShape.forEach((ele) =>
// {
//     ele.classList.toggle('fill-shpae')
// })

console.log(rndShape[0]);
// rndShape[0].addEventListener('click', ()=>
// {
//     rndShape[0].classList.toggle('fill-shpae')
// })
let add = 0
rndShape.forEach((ele, idx) =>
{
    ele.addEventListener('click', ()=>
    {
        
        ele.classList.toggle('fill-shpae')
        const classes = [...ele.classList]
        if (classes.includes('fill-shpae')) 
        {
            getInputValue[idx].style.color = "green"
            getInputValue[idx].style.textDecoration = "underline"
            getInputValue[idx].style.textDecorationLine = "line-through"
            let wid = parseInt(realTimeProgress.style.width.slice(0, realTimeProgress.style.width.length-1))
            wid += 34
            add++
            realTimeProgress.style.width = `${wid}%`
            rase.innerText = `${add}/3 completed`
            rase.style.color = "white"
            rase.style.margin = "0 0 0 5px"
        }
        else 
        {
            getInputValue[idx].style.color = "black"
            getInputValue[idx].style.textDecoration = "none"
            let wid = parseInt(realTimeProgress.style.width.slice(0, realTimeProgress.style.width.length-1))
            wid -= 34
            add--
            realTimeProgress.style.width = `${wid}%`
            rase.innerText = `${add}/3 completed`
            if(add === 0) rase.style.color = "black";
            else rase.style.color = "white"
            rase.style.margin = "0 0 0 5px"
        }

    })
})