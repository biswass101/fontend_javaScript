const button = document.querySelector("button")
const popUp = document.querySelector(".popup-container")
const closeIcon = document.querySelector(".close-icon")
const popupField = document.querySelector(".popup")

popupField.addEventListener("click", (e)=>
{
    e.stopPropagation()
})
button.addEventListener("click", (e)=>
{
    e.stopPropagation()
    popUp.classList.add("popup-open")
})
closeIcon.addEventListener("click", ()=>
{
    popUp.classList.remove("popup-open")
})
window.addEventListener("click", ()=>
{
    popUp.classList.remove("popup-open")
})
