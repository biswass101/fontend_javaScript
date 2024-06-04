function showString(string)
{
    return string
}
console.log(showString("Hello world"))

function showObject(obj)
{
    return obj
}
console.log(showObject({userName : 'niloy097', plateformName : 'codeforces', rank : 'pupil'}));

function showArray(arr)
{
    return arr
}

console.log([1, 2, 3, 4]);

const getFunction = showArray([1,2, 3])
console.log(typeof(getFunction)); //object
getFunction.age = 23
console.log(getFunction.age);