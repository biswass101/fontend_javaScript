const numbers = [435, 2, 3, 2, 123, 23, 3, 5, 14]
const getEvenNumbers = numbers.filter((num) => //this will return an array with some conditons on original array elements
{
    return num % 2 == 0
})
console.log(getEvenNumbers);



//filer the months of length grater than 5 from the months array--->

const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
const monGreFive = months.filter((month) => {
    return month.length >= 5
})
console.log(monGreFive);
//months that has a character of m or M in it-->
const getMcharMonths = months.filter((month) => {
    return month.includes('m') || month.includes('M')
})
console.log(getMcharMonths);


const students = [
    {
        name: 'Akash',
        age: 21
    },

    {
        name: 'Bikash',
        age: 13
    },
    {
        name: 'Chetan',
        age: 25
    },
    {
        name: 'gobind',
        age: 12
    },
    {
        name: 'Rakesh',
        age: 25
    },

]

const matureStudent = students.filter((obj) =>
{
    return obj.age >= 18
})
console.log("Full Result in Object-->");
console.log(matureStudent);

const mStuName = matureStudent.map((nam) =>
{
    return nam.name
})

console.log(mStuName);

