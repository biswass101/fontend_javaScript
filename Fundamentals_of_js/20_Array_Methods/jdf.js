const evenNumber = [0, 2, 4, 6, 8]
const oddNumber = [1, 3, 5, 7]
evenNumber.shift() // will remove value from 0'th index of the array
// console.log(evenNumber);

evenNumber.unshift(0) // will add in the first index
// console.log(evenNumber);


const animal = ['Cats', 'Dogs', 'Tiger', 'Rat', 'Elephant', 'Cow', 'Panther']

const sortedAnimal = animal.sort() //sroting with some logical order

// const newArray = evenNumber.concat(animal, oddNumber) // adding array in array

// console.log(oddNumber.indexOf(5)); //index of element

// console.log(oddNumber.includes(7)); // element exists in the array or not


// oddNumber.reverse()

// console.log(oddNumber); //it will affect the original array

console.log(animal.slice(3, 5)); //sub array
console.log(animal);

console.log("The removed element is: " + animal.splice(3, 1)) // will remove the selected numbers of elements
console.log(animal);


animal.splice(4, 1, "goood")
console.log(animal);



