document.querySelector('h1').style.color = 'red'
document.querySelector('h1').style.backgroundColor = 'pink'


const ankor = document.querySelectorAll('a')
// for(let i = 0; i < ankor.length; i++)
// {
//     ankor[i].style.color = 'teal'
// }

//using for of loop
// for(let clr of ankor)
// {
//     clr.style.color = 'red'
//     clr.style.textDecoration = 'none'
//     clr.style.fontWeight = 700
//     clr.style.fontFamily = 'cursive'
//     clr.style.fontSize = "18px"
// }

//another approach-->
// for(let link of ankor)
// {
//     link.style.cssText = `
    
//     color : teal;
//     text-decoration-line : none;
//     font-weight : 700;
//     font-size : 18px;
//     font-family : cursive
//     `
// }

//best approach -->
for(let link of ankor)
{
    // link.className = 'green-class'
    // link.setAttribute('class', 'green-class')
    // console.log(link.classList);
    link.classList.toggle('green-class')
    // link.classList.toggle('green-class')
}

document.querySelector("body > p.title > a:nth-child(3)").classList.add("my-name-is-niloy") //selected by js path and added class list
document.querySelector("body > p.title > a:nth-child(3)").classList.remove("my-name-is-niloy") //selected by js path and removed class list
//toggle -> thakle bad, na thakle add-->



//parent,siblings,child --->

const linkEle1 = document.querySelector("body > p.title > a:nth-child(2)")