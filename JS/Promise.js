let number1 = 10;

const promise = new Promise((resolve, reject)=>{

    if(number1 >= 10){
        resolve (number1);
    }

    else{
        reject(new Error("The number is not greater than 10"));
    }
})


promise
.then((result) =>{
    console.log("Resolved value :",result);
})
.catch((error) => {
    console.error("Rejected value :",error.message);
})





class UserNotLoggedInError extends Error {
    constructor(message) {
      super(message);
      this.name = 'UserNotLoggedInError';
    }
}
  

class NumberNotGreaterThanError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NumberNotGreaterThanError';
    }
}
  
  
  // First Promise
  const generateRandomNumber = (isLogged) => {
    return new Promise((resolve, reject) => {
      
        if (isLogged === true) {
        const randomNumber = Math.random();
        resolve(randomNumber);
      } 
      
      else {
        reject(new UserNotLoggedInError('User is not logged in.'));
      }
    });
  };
  
  // Second Promise
  const processNumber = (number) => {
    return new Promise((resolve, reject) => {
      if (number > 0.5) {
        const data = { name: "John", age: 24 ,number:number};
        resolve(data);
      } else {
        reject(new NumberNotGreaterThanError('Number is not greater than 0.5. => ' + number));
      }
    });
  };
  
  // Chaining the Promises
  generateRandomNumber(true)
    .then((randomNumber) => processNumber(randomNumber))
    .then((result) => {
      console.log(result); // { name: "John", age: 24 }
    })
    .catch((error) => {
      if (error instanceof UserNotLoggedInError || error instanceof NumberNotGreaterThanError) {
        console.error(error.message); // Log specific error messages
      } else {
        console.error('An unexpected error occurred:', error.message); // Log unexpected errors
      }
    })
    .finally(() => {
      console.log('Promise chain has been executed.'); // Will be executed regardless of resolve or reject
    });




