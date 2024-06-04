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

// user.firstName = "Kaliya"
// console.log(user.firstName);

//deleting object-->
console.log(user);
delete user.address
console.log(user);

Object.seal(user) //now can't add or delete any property from the object
delete user.firstName
console.log(user);
user.mobileNumber = '01343'
console.log(user);

//but we can chage the existiong property-->
user.firstName = "rabeya"
console.log(user);

Object.freeze(user) // nothing can be change here even the existing property value
user.firstName = "Rukaiya"
console.log(user);

//Checking a key in object is exist or not-->
console.log('firstName' in user); //true
console.log('city' in user); //false