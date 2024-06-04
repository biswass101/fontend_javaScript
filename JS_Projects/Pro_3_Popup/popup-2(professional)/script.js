const popUpOpne = document.querySelector(".popup-oppener-btn")
const popUpOpneCont = document.querySelector(".popup-oppener-btn-container")
const popupContainer = document.querySelector(".popup-container")
const closePopUp = document.querySelector(".canceler")
const subs = document.querySelector(".email-subs-cont button")
const subsIpt = document.querySelector(".email-subs-cont input")
popUpOpne.addEventListener("click", (e) =>
{
    e.stopPropagation()
    popUpOpneCont.style.display = "none"
    popupContainer.style.display = "block"
})

closePopUp.addEventListener("click", (e) =>
{
    popUpOpneCont.style.display = "flex"
    popupContainer.style.display = "none"
})
subs.addEventListener("click", (e) =>
{
    e.stopPropagation()
    if(subsIpt.value)
    {
        alert(`Successfully to Subscribe ${subsIpt.value}`)
        subsIpt.value = ''
        popUpOpneCont.style.display = "flex"
        popupContainer.style.display = "none"
    }
    else
    {
        alert("Fil the box with proper email")
    }
})
popupContainer.addEventListener("click", (e) =>
{
    e.stopPropagation()
})
window.addEventListener("click", () =>
    {
        popUpOpneCont.style.display = "flex"
        popupContainer.style.display = "none"
    })