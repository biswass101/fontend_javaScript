//in one line promises just a special type of object
const resolvePoromiseBtn = document.querySelector(".resolve")
const rejectPoromiseBtn = document.querySelector(".reject")
const p = new Promise((resolve, reject)=>{
    // resolve({"Niloy" : "NickName"})
    // reject("Promise Rejected")
    // setTimeout(() =>{
    //     resolve("Promise resolved")
    // },6000)

    resolvePoromiseBtn.addEventListener("click", () =>
    {
        resolve("Promise resolved")
    })
    rejectPoromiseBtn.addEventListener("click", () =>
    {
        reject("Promise rejected")
    })
})

//if promise resolved then this method will be called otherwise catch method--->
p.then((data) => {  //.then returns promises
    console.log(data);
}).catch((err) =>
{
    console.log(err);
    
})


setTimeout(() =>
{
    console.log("Hii");
}, 200)
