const h1 = document.querySelector('h1');
const container = document.querySelector(".container")
const getImage = document.querySelector(".img-poke")
//main topics starts here--->
// const para = document.createElement('p');
// para.innerText = "Niloy Is my name"
// para.classList.add('my-para');
// para.id = "my-para"
// container.appendChild(para)

for(let i = 1; i <= 200; i++)
{
    const imgEle = document.createElement('img')
    imgEle.setAttribute('alt', `pke-image-${i}`)
    imgEle.src = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png?raw=true`
    container.appendChild(imgEle)
}

