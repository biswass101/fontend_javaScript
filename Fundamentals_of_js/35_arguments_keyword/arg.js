function add(a, g)
{
    console.log(arguments);
    return a + g
}

//arguments is array like object
//this keyword(arguments) doesn't works for arrow function declaration

//method-1 --> function declaration
function agrTest()
{
    let getSum = 0
    for(let i = 0; i < arguments.length; i++)
    {
        getSum += arguments[i]
    }
    return getSum
}

//method-2 ---> function expression-->
const getSum = function()
{
    let sum = 0
    for(let i = 0; i < arguments.length; i++) sum += arguments[i]
    return sum
}

//arrow function has another approach to do this--->
const getSum1 = (...args)=>
{
    let sum = 0
    for(let i = 0; i < args.length; i++) sum += args[i]

    return sum
}