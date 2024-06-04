const questions = {
    "q_1" : {
        question : "Inside which HTML element do we put the JavaScript?",
        options : [
            "<js>",
            "<scripting>",
            "<javascript>",
            "<script>"
        ],
        corret_ans : "3"
    },
    "q_2" : {
        question : "What is the correct syntax for referring to an external script called 'xxx.js'?",
        options : [
            "f",
            "dfd",
            "a",
            "sadfdf"
        ],
        corret_ans : "1"
    },
    "q_3" : {
        question : "Who am I?",
        options : [
            "ww",
            "eee",
            "wwe",
            "wewewf"
        ],
        corret_ans : "0"
    },
}

//selection of elements-->
const body = document.querySelector("body")
const quesEle = document.querySelector(".questions-container")
const opEle = document.querySelectorAll(".option-text")
const optionContainer = document.querySelectorAll(".option")
const nextBtn = document.querySelector(".quize-next")
const prevBtn = document.querySelector(".quize-prev")
const quizeCnt = document.querySelector(".qc span")
let getTime = document.querySelector(".sec")
const optionEles = document.querySelectorAll(".option-text")
const validationP = document.querySelectorAll(".validation p")
const validationImg = document.querySelectorAll(".validation div img")
quesEle.innerText = questions.q_1.question
opEle.forEach((ele, idx) =>
{
    ele.innerText = questions.q_1.options[idx]
})
// let f = setInterval(()=>
//     {
//         let time = parseInt(getTime.innerText);
//         time--;
//         if(time >= 10) getTime.innerText = time;
//         else getTime.innerText = '0' + time
//         if(time <= 15 && time > 5) body.style.backgroundColor = "#E4E5C7"
//         if(time <= 5 && time >=0) body.style.backgroundColor = "#DBADAD"
//         if(time == 0)
//             {
//                 clearInterval(f)
//                 body.style.backgroundColor = "#CCE2C2"
//             }
        
//     }, 1000)
quizeCnt.innerText = `1/${Object.keys(questions).length}`
let inc = 1
let isCorrect = false;
nextBtn.addEventListener("click", () => {
    optionContainer.forEach((op) =>
    {
        if([...op.classList].includes("rb")) op.classList.remove("rb")
        if([...op.classList].includes("wb")) op.classList.remove("wb")
        validationP.forEach((vali) => vali.style.display = "none")
        validationImg.forEach((valiImg) => valiImg.style.display = "none")
    })
    getTime.innerText = 20;
    isCorrect = false
    inc++;
    if (inc <= 3) {
        
        let id = setInterval(()=>
        {
            if(isCorrect) clearInterval(id)
            let time = parseInt(getTime.innerText);
            time--;
            if(time >= 10) getTime.innerText = time;
            else getTime.innerText = '0' + time
            if(time <= 15 && time > 5) body.style.backgroundColor = "#E4E5C7"
            if(time <= 5 && time >=0) body.style.backgroundColor = "#DBADAD"
            if(time == 0)
                {
                    clearInterval(id)
                    body.style.backgroundColor = "#CCE2C2"
                }
            
        }, 1000)
        quizeCnt.innerText = `${inc}/${Object.keys(questions).length}`
        quesEle.innerText = questions[`q_${inc}`].question
        opEle.forEach((ele, idx) => {
            ele.innerText = questions[`q_${inc}`].options[idx]
        })
    }
    else
    {
        alert("No more Quize")
    }
})
prevBtn.addEventListener("click", () => {
    inc--;
    if (inc >= 1) {
        quizeCnt.innerText = `${inc}/${Object.keys(questions).length}`
        quesEle.innerText = questions[`q_${inc}`].question
        opEle.forEach((ele, idx) => {
            // console.log(ele);
            // console.log(idx);
            ele.innerText = questions[`q_${inc}`].options[idx]
        })
    }
    else
    {
        alert("No more Quize")
    }
})

//quize validation
optionEles.forEach((ele, idx) => {
    ele.addEventListener("click", (e) => {
        // console.log(idx);
        if(idx == questions[`q_${inc}`].corret_ans)
            {
                isCorrect = true;
                e.target.parentElement.classList.add("rb")
                e.target.parentElement.children[1].children[0].innerText = "Correct"
                e.target.parentElement.children[1].children[1].children[0].src = "./correct.png"
                e.target.parentElement.children[1].children[0].style.display = "inline"
                e.target.parentElement.children[1].children[1].children[0].style.display = "block"
            }
        else 
        {
            isCorrect = false
            e.target.parentElement.classList.add("wb")
            e.target.parentElement.children[1].children[0].innerText = "Wrong"
            e.target.parentElement.children[1].children[1].children[0].src = "./wrong.png"
            e.target.parentElement.children[1].children[0].style.display = "inline"
            e.target.parentElement.children[1].children[1].children[0].style.display = "block"
            // console.log( questions[`q_${inc}`].corret_ans);
            let ans = questions[`q_${inc}`].corret_ans;
            ans++
            const rightAns = document.querySelector(`.option${ans}`)
            console.log(rightAns);
            rightAns.classList.add("rb")
            rightAns.children[1].children[0].innerText = "Correct"
            rightAns.children[1].children[1].children[0].src = "./correct.png"
            rightAns.children[1].children[0].style.display = "inline"
            rightAns.children[1].children[1].children[0].style.display = "block"
        }
    }, )
})

