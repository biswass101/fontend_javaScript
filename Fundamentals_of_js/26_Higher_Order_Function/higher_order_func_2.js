function a(b) //higher order function
{
    console.dir(b);

    b()
}


function sayHi()
{
    console.log("Hiiiiiiiii");
}

a(sayHi)


//anonymous function--->

a(function() //this function is known as call back function
{
    console.log("Hiiiii*2");
})