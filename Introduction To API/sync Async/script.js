/*
Notes:------->
Synchronous --> Line by line coade running(runs only main threads)
Asynchronous --> Not line by line
AJAX -> Asynchronous JavaScript And XML.
*/
const btn = document.querySelector("button")
btn.addEventListener("click", () =>
{
    const xhr = new XMLHttpRequest()
    console.log(xhr);
    // xhr.responseType = 'json' //object form
    xhr.addEventListener("load", () =>
    {
        // console.log(JSON.parse(xhr.response));
        // console.log(xhr.response);

    })
    xhr.open('GET', 'https://httpbin.org/delay/3', false) // now sync for 3'rd arg false(default is true async)
    xhr.send()
    
   
})

//async code-->
// setInterval(() =>
// {
//     console.log("You are a guuu");
// }, 4000)


//blocking main thread --->(sync coding)
//way-1
// alert("HII")

//way-2
// const strtTime = Date.now()  //gives mili sec from 1970 mid night 12.00 am
// let currentTime = strtTime; 
// while(strtTime + 2000 > currentTime){
//     currentTime = Date.now();
// }
//way-3
const blockThrbtn = document.querySelector(".block-tread-btn")
blockThrbtn.addEventListener("click", () => {
    const strtTime = Date.now()  //gives mili sec from 1970 mid night 12.00 am
    let currentTime = strtTime;
    while (strtTime + 4000 > currentTime) {
        currentTime = Date.now();
    }
})

