// const user = {

//     firstName : "Niloy",
//     lastname : "Biswass",
//     age : 26,
//     education : 12,
//     city : "Dhaka"
// }

// const user2 = 
// {
//     firstName : "Niloy",
//     "last-name" : "Biswass",
//     age : 26,
//     education : 12,
//     city : "Dhaka"
// }

// console.log(user.firstName); //for access-1
// console.log(user['age']); // for access-2

// console.log(user2["last-name"]);
// console.log(user2["first" + "Name"]);


// const user = 
// {
//     name : "Naeem Biswass",
// }

// user.age = 34 //adding keys in object
// user['is-student'] = true;
// console.log(user);

//Object in object-->
const user = 
{
    firstName : "Niloy",
    lastName : "Biswass",
    address : {
        city : 'Dhaka',
        pinCode : '1344',
        state : 'savar'
    } 
    
}

console.log(user.address.state);