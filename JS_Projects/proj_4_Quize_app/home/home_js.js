const nextWindowButton = document.querySelector(".button-container")

nextWindowButton.addEventListener("click", () =>
{
    console.log("button clicked");
    location.href = "/quize/quize.html";
})