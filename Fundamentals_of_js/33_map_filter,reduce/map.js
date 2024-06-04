const months = ['january', 'february', 'march', 'april']
//map methods return an array-->
const getArray = months.map((month) =>
{
    console.log(month);
})
console.log(getArray);

const number = [1, 2, 3, 4]

const getSqrNumber = number.map((sqr)=>
{
    return sqr * sqr
})
console.log(getSqrNumber);

const uppercaseMonths = months.map((month) =>
{
    console.log(month); //showing the original
    return month.toUpperCase()
})
console.log(uppercaseMonths);

//getting index with map-->
const values = months.map((month, idx) =>
{
    console.log(idx + 1, month);
    return month.toUpperCase()
})
console.log(values);

