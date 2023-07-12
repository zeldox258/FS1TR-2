let a, b, c, zeki;
[a, b, c, ...zeki] = [10,20,30,40,50,60,70];


console.log(a, b, zeki, c);

let arr = [1,2,3,4,5,6,7,8,9,10];
[a,...zeki] = arr;


console.log(a,b,c,zeki);

arr = zeki;

arr[5] = 99;
console.log(arr,zeki);


const obj = {z:[1,2,3,4,5,6,7],b:2,k:"Taha"}

const {z,k} = obj;

console.log(z,k);


const obj2 = {ali:"25",mehmet:32};
const{ali:ahmet,mehmet:taha} = obj2;

console.log(ahmet,taha);



const obj3 = {a:{b:{c:{d:5}}}}
//kerim
const {a:{b:{c:{d:kerim}}}} = obj3;

console.log(kerim);


let numbers = [];

const obj4 = {a:1,b:2,c:3,d:4};//numbers[0] = 1, numbers[1] = 2, numbers[2] = 3, numbers[3] = 4

({a:numbers[0], b:numbers[1], c:numbers[2], d:numbers[3]} = obj4);// [1, 2, 3, 4]



console.log(numbers);


let arrr = []
console.log(arrr[0])

let burak = null;
console.log(burak);
[burak = 1] = arrr;


console.log(burak);

let {omer = 2} = {omer:undefined}
let {omer1 = 2} = {omer1:null}
let {omer2 = 2} = {omer2:5}



console.log(omer,omer1,omer2);

let obj5 = {aa:5,cc:6,dd:9,zz:89,kk:99,polat:98,bb:8989};

const{aa,kk,dd,...OREN} = obj5;

console.log(aa,kk,dd,OREN);



