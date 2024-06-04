// aynsc keyword before any function returns a promise with fullfil state
// and promise result is the return value from the function
// if we want to reject the promise we have to throw an error
async function makeRequest() 
{
    // return "hello"
    throw new Error("Error")
}

async function mR()
{
    const url = 'https://httpbin.org/delay/5'
    const resProm = fetch(url)
    resProm.then((res) => res.json()).then((data) => console.log(data))
}
// mR()

//Uderstanding await keyword--->
// await keyword before the fetch gives the promise result in object form
// so we dont write the '.then' for getting promise result
async function mr2()
{
    const url = 'https://httpbin.org/delay/2'
    const response = await fetch(url) //await keyword only can be used in async function
    const data = await response.json()

    return data
    //shorthand
    // const data = await (await fetch(url)).json()
    // console.log(data);
}
mr2().then((data) => console.log(data)).catch((err) => console.log(err))

// function addTwoNumber()
// {
//     return 2 + 6
// }

//side note --> understanding throw keyword
// throw 'erronr in program' //it will give error and after this line of codes won't be executed
function sayHi()
{
    console.log("hi");
    //way-1
    throw new Error("Program error")
    //way-2
    throw "Program error"
    console.log("hello");
}