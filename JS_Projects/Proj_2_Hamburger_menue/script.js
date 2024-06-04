const hamburgerIcon = document.querySelector(".hamburger-menu-container")
const headerContent = document.querySelector(".header-container")
const closeIcon = document.querySelector(".close-icon")
const gotoTop = document.querySelector(".got-to-top")
const mainContent = document.querySelector(".main-content")
hamburgerIcon.addEventListener("click", (e)=>
{
    e.stopPropagation()
    headerContent.classList.add("menu-open")
})

closeIcon.addEventListener("click", ()=>
{
    headerContent.classList.remove("menu-open")
})

gotoTop.addEventListener("click", () =>
{

    mainContent.scrollTo(0, 0)
})
window.addEventListener("click", () =>
{
    
    headerContent.classList.remove('menu-open')
})