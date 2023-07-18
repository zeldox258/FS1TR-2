function calculator(callBacks,num1,num2){
    return callBacks(num1,num2);
}


let sum = (a,b)=> a+b;
let sub = (a,b)=> a-b;
let div = (a,b)=> a/b;
let mul = (a,b)=> a*b;



console.log(calculator(sum,5,2))


/*

Write a function called repeatHello, which will take as parameter a callback. 
The callback function will simply print "Hello". 
The repeatHello function will have to execute the callback function with an interval of 1 second. 
The callback function must be an arrow function, can you also explain why?



second parameter of repeatHello is again callback and its gonna stop the interval after 5 second.

*/

function repeatHello(printHello,stopInterval) {

    let interval = setInterval(printHello,1000);
    stopInterval(interval);
    
}

repeatHello(
()=>{console.log("Hello")},
(interval)=>{
    setTimeout(()=>{
        clearInterval(interval);
    },5000)
}
);