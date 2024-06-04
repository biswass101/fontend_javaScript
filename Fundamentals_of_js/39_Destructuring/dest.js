const colors = ['red', 'green', 'yellow', 'pink', 'black']

const user = 
{
    name : 'Anurag',
    age : 25,
    address : {
        city: 'Arunachal',
        state : 'Dhala'
    },
}

//destruturing-->
const [color1, color2, color3] = colors
const [,,,fourthColor] = colors
const {3 : color4, 4 : color5} = colors

//obj dest--->
const {address, age} = user //key name should be correct(same as declared in actual object)

const {address : {city, state}} = user

function destVal({name, age})
{
    console.log(name, age);
}

function printColor([a, b, c])
{
    console.log(a,b, c);
}
