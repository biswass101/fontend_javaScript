const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']

// for(let fruit of fruits) console.log(fruit);
//forEach an array method

fruits.forEach(function(fruit) //this function will sent every element as a parameter
{
    console.log(fruit); //every element will be printed here
})


console.log("new Line");

fruits.forEach((fruits) =>
{
    console.log(fruits);
})
