const evenNumbers = [2, 4, 6, 8, 10, 12]

const getretval = evenNumbers.some((num) =>
{
    console.log(num)
    return num >= 5
})
console.log(getretval);

//every methods will do the oppossite work of some method