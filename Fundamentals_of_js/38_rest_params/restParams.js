function addition(...nums)
{

    console.log(nums);
    let sum = 0
    for(let i = 0; i < nums.length; i++) sum += nums[i]

    return sum;
}


const num1 =  [1, 2, 3, 4]
function add(a, b, ...nums)
{
    console.log(a, b);
    console.log(nums);
    let sum = 0
    for(let i = 0; i < nums.length; i++) sum += nums[i]

    return sum;
}



