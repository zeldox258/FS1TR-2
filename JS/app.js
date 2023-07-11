class person{
    static population = 0;
    constructor(age, name, height, weight){

        this.age = age;
        this._name = name;
        this.height = height;
        this.weight = weight;
        person.population++;

    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }


    calculateBirthYear = ()=>{
        return 2023-this.age;
    }

    printInfo = ()=>{
        console.log(`Hello my name is ${this.name} I am ${this.age} years old and I am ${this.height} and ${this.weight} KG`);
    }

    static addFunction = (a,b) => a+b;


}



let person1 = new person(25,"Burak",197,85);
let person2 = new person(22,"Taha",163,80);
let person3 = new person(25,"Zeki",183,85);
let person4 = new person(23,"Omer",177,106);




person1.printInfo();
console.log(person3.calculateBirthYear());
console.log(person4);
console.log(person);
console.log(person.addFunction(5,6));

console.log("Current Population :",person.population);

let ali = person3.name
console.log(person3.name);
person3.name = "ZEKI DOSYILMAZ";
console.log(person3.name);

//person3._name//nout recommended 
//console.log(person2.addFunction(5,6)); Wrong Usage 


//console.log(person.calculateBirthYear()); Wrong usage



class worker extends person{

    constructor(age, name, height, weight, role){
        super(age, name, height, weight);
        this.role = role;
    }   

    printInfo = ()=>{
        console.log(`Hello my name is ${this.name} I am ${this.age} years old and I am ${this.height} and ${this.weight} KG I am working as a ${this.role}`);
    }

}

let worker1 = new worker(23,"Omer",177,106,"student");
//let worker2 : Person = new worker();

worker1.printInfo();
person4.printInfo();


console.log(worker1 instanceof person);
console.log(worker1 instanceof worker);
console.log(person4 instanceof person);
console.log(person4 instanceof worker);



class shape{
    constructor(){

    }

    //abstract
    getArea(){
        throw new Error("You must override that");
    }
}

class triangle extends shape{
    constructor(a,b,c){
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getArea(){//wrong formula
        return this.a * this.b / 2;
    }

}

class square extends shape{
    constructor(a){
        super();
        this.a = a;
    }

    getArea(){
        return this.a * this.a;
    }

}


let sqr = new square(5);
let tri = new triangle(3,4,5);


console.log(sqr.getArea());
console.log(tri.getArea());












