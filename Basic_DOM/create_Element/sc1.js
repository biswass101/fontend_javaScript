const h1 = document.querySelector('h1');
const container = document.querySelector(".container")


let myHtml = ``

for(let i = 1; i <= 200; i++)
{
    // const imgDiv = document.createElement('div')
    // imgDiv.classList = "img-container"

    //way-1
    // const newImg = document.createElement('img');
    // const imgNum = document.createElement('p')
    // imgNum.innerText = i
    // newImg.src = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png?raw=true`
    // newImg.alt = `poke-img-${i}`

    // imgDiv.appendChild(newImg)
    // imgDiv.appendChild(imgNum)
    // container.appendChild(imgDiv)
    //way-2
    // const myHtml = 
    // `
    // <img class = "img-poke" src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png?raw=true" alt="poke-img-${i}">
    // <p>${i}</p>
    // ` 

    // imgDiv.innerHTML = myHtml
    // container.appendChild(imgDiv)


    //way-3--->
    myHtml += `
    <div class="img-container">
        <img class = "img-poke" src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png?raw=true" alt="">
        <p>${i}</p>
    </div>
    `
}

container.innerHTML = myHtml


//Removing Element-->

const img4 = document.querySelector("body > div > div:nth-child(4)")
img4.remove()