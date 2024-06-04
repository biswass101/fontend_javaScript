//getting attributes--->
const getAttribute = document.querySelector('[niloy]').attributes.niloy.value //method-1
const getAttribute1 = document.querySelector('[niloy]').getAttribute('niloy') //method-2
const h1Classes = document.querySelector('h1').getAttribute('class')

//setting atrributes-->
document.querySelector('h1').setAttribute('title', 'Heading...')
document.querySelector('h1').setAttribute('id', 'tit')