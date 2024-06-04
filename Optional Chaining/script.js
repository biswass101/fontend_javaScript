const user = 
{
    firstName : "Niloy",
    lastName : "Biswass",
    age : 23,
    address : {
        city : "Dhaka"
    },
    getFullName : function()
    {
        return user.firstName + " " + user.lastName
    }
}
//Normal way-->
// console.log(user.address && user.address.city);
//Opt. chaining way-->
console.log(user.address?.city); // ? --> if address property exists in user then execute .city
console.log(user.getFullName?.()); // ? --> if getFullName function exists in user then call it