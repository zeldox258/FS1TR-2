let person = {
    name:"Taha",
    surname:"Oren",
    age:22,
    height:163
}

console.log(person);

let stringObject = JSON.stringify(person);

console.log(stringObject);

console.log(JSON.stringify([1,2,3,4,5,6,7,8,9,10]))
let stringversion = "{\"name\":\"Taha\",\"surname\":\"Oren\",\"age\":22,\"height\":173}";
console.log("BURAK :",stringversion);

let stringToObj = JSON.parse(stringversion);
console.log(stringToObj)

stringToObj.age = 25;

console.log(stringToObj)
console.log(person);


console.log(` selam ${stringObject} selam dsbkfsa ${stringToObj.age}fsafsa`);



