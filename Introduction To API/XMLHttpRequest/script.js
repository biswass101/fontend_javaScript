const image = document.querySelector("img")
const btn = document.querySelector("button")
btn.addEventListener("click", () =>
{
    // fetch('https://dog.ceo/api/breeds/image/random')
    // .then((response) => response.json())
    // .then((json) =>
    // {
    //     image.src = json.message
    // })

    const xhr = new XMLHttpRequest()
    console.log(xhr);
    xhr.responseType = 'json' //object form
    xhr.addEventListener("load", () =>
    {
        // console.log(JSON.parse(xhr.response));
        // console.log(xhr.response);
        image.src = xhr.response.message

    })
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
    xhr.send()
    
   
})
