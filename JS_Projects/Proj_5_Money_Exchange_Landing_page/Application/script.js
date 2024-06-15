const senderAmount = document.querySelector(".amount")
const reciverAmount = document.querySelector(".tk")
function chnageMoney(value)
{
    return 122.26 * value
}
senderAmount.addEventListener("input", (e)=>
{   
    let getChangeMoney = chnageMoney(e.target.value)
    console.log(getChangeMoney.toFixed(2));
    reciverAmount.innerText = getChangeMoney.toFixed(2)
})