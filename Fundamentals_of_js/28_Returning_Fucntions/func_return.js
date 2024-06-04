const a = 4
const b = 6



//higher order function-->
function parent()
{
    function add()
    {
        console.log(a + b);
    }

    return add
}


console.log(parent()());
