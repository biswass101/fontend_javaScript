// console.log(a); //error line
// console.log(2 + 6);  // this line will not be execut

//using this with try catch block-->
// try{
//     console.log(a);
// }
// catch(err)
// {
//     console.dir(err.message); // error caught here if statement is not valid
// }

// console.log(2 + 6); //now this line is executed



//try catch with aysnc function-->
async function makeAsyncRequest() {
    try {
        const url = 'https://httpbin.org/delay/2'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        return data
    }
    catch(err)
    {
        console.dir(err.message);
    }
}
makeAsyncRequest()