const container = document.querySelector(".container")
const card = document.querySelector('.card')

const h1 = document.querySelector('h1');

//appending childElement --->
// container.appendChild(h1)
    //cloning Nodes-->
    // container.appendChild(h1.cloneNode(true))
    // container.appendChild(card.cloneNode(true))

// const newCard = card.cloneNode()
// newCard.innerText = "2";
// container.appendChild(newCard)
// for(let i = 3; i <=100; i++)
// {
//     const newCard = card.cloneNode()
//     newCard.innerText = i;
//     // container.appendChild(newCard)
//     container.append(newCard)
// }

//appnedChild returns the appended element but append doesnot reutrn anything

//big difference between these -->
// container.append("hello") // works
// container.appendChild("hello") // not works

//solution-->
// const newNode = document.createTextNode("Hello")
// container.appendChild(newNode)

