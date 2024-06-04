
//function without returning value
function inroduceMe()
{
    console.log("Hi");
    console.log("My name is");
    console.log("Niloy");

    return 1
}

const returnedValue = inroduceMe()

console.log(returnedValue);

function printIt(para)
{
    console.log(para);
    return "OK"
}

console.log(printIt("Rahum"));


function add(a, b)
{
    return parseInt(a) + parseInt(b)
}


console.log("Adding 4 + 7: ", add(4, 7));