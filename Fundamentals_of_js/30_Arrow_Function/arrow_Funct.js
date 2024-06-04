//Function Declaration
function sqr(num)
{
    return num * num
}
console.log(sqr(10));


//Function Expression-->
const sqr1 = function(num)
{
    return num * num
}
console.log(sqr1(10));

//Arow Function Expression-->

const sqr3 = (num) => 
{
    return num * num
}
console.log(sqr3(4));

const additon = (num1, num2) => num1 + num2 //implicit return
console.log(additon(1, 3));
const mulTable = (num) =>
{
    for(let i = 1; i <= num; i++) console.log(`${num} * ${i} = ${num * i}`);
    return num
}
console.log(mulTable(10));

setTimeout(() => {
    console.log("Hi-1");
}, 1000)

const getRandomNumber = () => Math.random()

console.log(getRandomNumber());