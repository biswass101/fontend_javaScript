const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']
for(let i = 0; i < fruits.length; i++) console.log(fruits[i]);


console.log("Second time printing-->");
for(let fruit of fruits) console.log(fruit);

console.log("Priting array---->");

const nums = [2, 4, 6, 10, 12]
for(let num of nums) console.log(num);

const string = "Naeem Biswass Niloy"
for(let char of string) console.log(char);


const cars = ['ferrari', 'nissan', 'bugati', 'maruti']
for(const car of cars) console.log((car));

//Looping in object--->
// console.log("\n\n");
const person = {
    firsName : "John",
    lastName : "Doe",
    age  : 50,
    eyeColor : 'Blue',
    city : 'Dhaka'
}

for(const key in person)
console.log(`${key} -  ${person[key]}`);

// console.log("\n");
// console.log(Object.keys(person)); //List of keys in object

//faster way to looping an object
const personKeys = Object.keys(person) //array of keys
const personValues = Object.values(person) // array of values
const entries = Object.entries(person) // array of array(0'th idx --> key and 1'th idx --> value)
for(const key of personKeys) console.log(person[key]);