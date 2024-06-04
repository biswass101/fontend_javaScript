//shallow copy-->
const fruits = ['Mango', 'Apple', 'Orange']
const myFruits = fruits

myFruits.push("Dates")
myFruits.push("graps")

console.log(myFruits);


const user1 = 
{
    firstName : 'Niloy',
    lastName : 'Biswass',
    obj : {
        1 : 'dkjd',
        on2 : {

        }
    }
}



const user2 = user1

console.log(user2);

user2.lastName = "Khane"
//both will give same result after changing
console.log(user2);
console.log(user1);


// const check = [1, 2, 3]
// console.log(check);
// const check2 = check
// console.log(check2);
// check2[2] = 100
// console.log(check2);
// console.log(check);

const user3 = {}
//Right way to copy-->
Object.assign(user3, user1)
user3.lastName = "Boshu"

const newFruit = [... fruits] //spread operator ... (shallow copy) --> 1 level copy
console.log(newFruit);