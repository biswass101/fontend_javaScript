//formate of the while loop-->
// let i = 1
// while(i < 3)
// {
//     console.log(i);
//     i = i + 1
// }

const friends = ["Nabid", "Sifat", "Emon", "Suvo", "Tahmid"]
//while loops
console.log("Printing with while loops-->");
let i = 0
while(i < friends.length)
{
    friends[i] += ' Coder'
    console.log(`friends ${i + 1} -> ${friends[i]}`);
    i = i + 1
}

console.log("Printing with for loops-->");
for(let i = 0; i < 10; i++)
{
    console.log(i);
}

for(let i = 0; i < friends.length; i++)
{
    console.log(friends[i]);
}