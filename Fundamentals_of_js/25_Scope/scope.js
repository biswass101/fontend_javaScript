// debugger

const username = 'Niloy'
const userAge = 25
let x = 23
var a = 21 

// function add()
// {
//     const x = 5
//     const y = 8

//     console.log(x + y);
//     console.log(username);
// }


// console.log(x + y);

// add()


function sub()
{
    const x = 23
    const y = 23
    console.log(x + y);
    console.log(username);
    function child()
    {
        const childName = "Golu"
        console.log(childName);

        function gradChild()
        {
            const grandChildName = "Molu"
            console.log(grandChildName);
        }

        gradChild()
    }

    child()
}

sub()

console.log("Program Ended");

//Output Section --> 46 Niloy Golu