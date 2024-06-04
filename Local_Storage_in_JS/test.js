const nameInput = document.querySelector("#name")
const ageInput = document.querySelector("#age")
const nameContainer = document.querySelector(".name-container")
const ageContainer = document.querySelector(".age-container")
myDetails = JSON.parse(localStorage.getItem("myDetails")) || {}

if(myDetails.name)
    nameContainer.innerText = myDetails.name
if(myDetails.age)
    ageContainer.innerText = myDetails.age
nameInput.addEventListener("input", (e)=>
{
    myDetails.name = e.target.value
    localStorage.setItem("myDetails", JSON.stringify(myDetails))
    nameContainer.innerText = e.target.value;
})
ageInput.addEventListener("input", (e)=>
{
    myDetails.age = e.target.value
    localStorage.setItem("myDetails", JSON.stringify(myDetails))
    ageContainer.innerText = e.target.value;
})
