const num1 = [1, 2, 3, 4]
const num2 = [5, 6, 7, 8, 9, 10]
const myName = "Niloy"

const joinedArray = num1.concat(num2)

console.log(joinedArray);

//spread--->
const joinedArray2 = [...num1, ...num2]


const user1 =
{
    name : "Niloy",
    age : 23
}

const user2 = 
{
    city : "chila",
    postal_code : 1344
}
const joinedUser = {...user1, ...user2}


function add()
{
    let sum = 0
    for(let i  = 0; i < arguments.length; i++) sum += arguments[i]
    return sum
}

console.log(add(...joinedArray2))



