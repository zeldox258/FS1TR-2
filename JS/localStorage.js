console.log("Hedef Zeki Kanada");

localStorage.setItem('taha','zeki');
console.log(localStorage.length);
const tahaValue = localStorage.getItem('taha');
console.log(tahaValue);

// Storing an object as a JSON string
const userObject = { name: 'John Doe', age: 30, email: 'john@example.com' };
localStorage.setItem('user', JSON.stringify(userObject));

console.log(localStorage.length);
const userValue = localStorage.getItem('user');
console.log(userValue);
userValueObject = JSON.parse(userValue);
console.log(userValueObject);

//setItem(), getItem(), removeItem(), length, clear()

localStorage.removeItem('taha');
localStorage.clear();
console.log(localStorage.length);
const tahaValue1 = localStorage.getItem('taha');
console.log(tahaValue1);



/*Taha */

/* 

write simple person object +
store that object as a json in localStorage, key will be 'taha' +
then get that object and print string version +
then convert it to object and print object version +
then remove taha from localStorage +
then try to get taha again and print result. +

*/


const person ={
    age:26,
    name:"Taha"
}

localStorage.setItem('taha',JSON.stringify(person));
let tahaObject = localStorage.getItem('taha');
console.log(tahaObject);
let parsedObject = JSON.parse(tahaObject);
console.log(parsedObject);
localStorage.removeItem('taha');

tahaObject = localStorage.getItem('taha');
console.log(tahaObject);