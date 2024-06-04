const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')
const progressLabel = document.querySelector('.progress-level')
const quote = document.querySelector('.quote')
const addGoladBtn = document.querySelector('.add-goal')
const allGoalContainer = document.querySelector('.all-goal-container')

//way-1 for fixing bug
// const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
//     // sample object design in it
//     first : 
//     {
//         name : "",
//         completed : false,
//     },
//     second : 
//     {
//         name : "",
//         completed : false,
//     },
//     third : 
//     {
//         name : "",
//         completed : false,
//     },
// }
//way-2 for fixing bug
const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}
const allMotive = [
    'Raise the bar by completing your goals!',
    'Well begun is half done!',
    'Just a step away, keep going!',
    'Whoa! You just completed all the goals, time for chill :D'
]
const bottomMotive =
[
    '“Move one step ahead, today!”',
    '“You are doing great!”',
    `“Keep Going, Your'e making great progress!”`,
    `“Wow you've done a great job!”`
]
let completedGoalCount = Object.values(allGoals).filter((goal) => goal.completed).length
progressValue.style.width = `${completedGoalCount * 100 / inputFields.length}%`
progressValue.firstElementChild.innerText = `${completedGoalCount}/${inputFields.length} Completed`
progressLabel.innerText = allMotive[completedGoalCount];
quote.innerText = bottomMotive[completedGoalCount];
// addGoladBtn.addEventListener('click', ()=>
// {
//     const goalContainer = document.createElement('div');
//     goalContainer.classList.add('goal-container')
//     goalContainer.innerHTML = 
//     `<div class="custom-checkbox">
//         <img class="tic-icon" src="./tic.png" alt="tic-icon">
//     </div>
//     <input id="id-${completedGoalCount+1}" class="goal-input" type="text" placeholder="Add new goal">`
//     allGoalContainer.appendChild(goalContainer);
// })
checkBoxList.forEach((checkbox)=>
{
    checkbox.addEventListener('click', (e) =>
    {
        const allGoalsAdded = [...inputFields].every((input)=> //empty string is a falsey value
        {
            return input.value
        })
        if(allGoalsAdded){
            checkbox.parentElement.classList.toggle('completed')
            
            const inputId = checkbox.nextElementSibling.id;
            // console.log(allGoals[inputId]);
            allGoals[inputId].completed = !allGoals[inputId].completed
            completedGoalCount = Object.values(allGoals).filter((goal) => goal.completed).length
            progressValue.style.width = `${completedGoalCount * 100 / inputFields.length}%`;
            progressValue.firstElementChild.innerText = `${completedGoalCount}/${inputFields.length} Completed`
            progressLabel.innerText = allMotive[completedGoalCount];
            quote.innerText = bottomMotive[completedGoalCount];
            localStorage.setItem('allGoals', JSON.stringify(allGoals))
        }
        else
        {
            progressBar.classList.add("show-error")
        }
    })
})

inputFields.forEach((input) =>
{
    if(allGoals[input.id])
    {
        input.value = allGoals[input.id].name
        if(allGoals[input.id].completed){
            input.parentElement.classList.add("completed")
        }
    }
    
    input.addEventListener('focus', ()=>
    {
        progressBar.classList.remove("show-error")
    })

    input.addEventListener('input', (e) =>
    {
        if(allGoals[input.id] && allGoals[input.id].completed){
            input.value = allGoals[input.id].name
            return
        }
        if(allGoals[input.id]){
            allGoals[input.id].name = input.value;
        }
        else
        {
            allGoals[input.id] =
            {
                name : input.value,
                completed : false,
            }
        }
        
        localStorage.setItem('allGoals', JSON.stringify(allGoals))
    })
})
