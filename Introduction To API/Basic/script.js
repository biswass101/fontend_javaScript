const image = document.querySelector("img")
const btn = document.querySelector("button")
btn.addEventListener("click", () =>
{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((json) =>
    {
        image.src = json.message
    })
})