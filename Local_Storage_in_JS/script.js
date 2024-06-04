const nameEle = document.querySelector(".name-tag");
const nameInput = document.querySelector(".name-input");
const ageEle = document.querySelector(".age-tag");
const ageInput = document.querySelector(".age-input");

// nameEle.innerText = localStorage.myName;
// nameEle.innerText = localStorage.getItem('myName')
// nameInput.addEventListener('input', (e) =>
// {
//     // localStorage.myName = e.target.value;
//     localStorage.setItem('myName', e.target.value);
//     // nameEle.innerText = localStorage.myName;
//     nameEle.innerText = localStorage.getItem('myName');
// });

// ageEle.innerText = localStorage.getItem('myAge')
// ageInput.addEventListener('input', (e) =>
// {
//     localStorage.setItem('myAge', e.target.value);
//     ageEle.innerText = localStorage.getItem('myAge'); 
// });

//storing data in object form in localStorage of js engine-->
const myData = JSON.parse(localStorage.getItem('myData')) || {}
if(myData.name) nameEle.innerText = myData.name;
if(myData.age) ageEle.innerText = myData.age;
nameInput.addEventListener('input', (e)=>
{
    myData.name = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));
    // nameEle.innerText = JSON.parse(localStorage.getItem('myData')).name;
    nameEle.innerText = e.target.value
});

ageInput.addEventListener('input', (e)=>
{
    myData.age = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));
    // ageEle.innerText = JSON.parse(localStorage.getItem('myData')).age;
    ageEle.innerText = e.target.value
});