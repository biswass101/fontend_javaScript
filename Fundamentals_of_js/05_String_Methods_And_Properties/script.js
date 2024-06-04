const messege = "Hello, are you a gay"
const bajeMessage = "       I am GayLoona fan       "
// console.log(messege.indexOf("o"));
console.log(messege.length);
console.log(messege.toUpperCase());
console.log(messege.toLocaleLowerCase())
console.log(bajeMessage.trim()); //remove the white spaces from the string
//and don't change  the original string
//more methods like trim --> trimStart(), trimEnd()
console.log(messege.includes("gay"));//.includes check the existing substring is present in the actual str or not
console.log(messege.includes("Gay"));
console.log(messege.indexOf('y'));
console.log(messege.replace("Hello", "Hi")); //will change the first matching sub_str
console.log(messege.replaceAll('a', 'A')); //change the all matching sub_str
console.log(messege.concat(bajeMessage.trim()));
console.log(messege.split(" "));


console.log("<-----------------------Template String goes form here------------>");

const last_four_digit = 34343
const tempString = `My name is Niloy` + ' '.concat(last_four_digit)


const tempString1 = `My name is Niloy, and  i my accound no: is ${last_four_digit}`