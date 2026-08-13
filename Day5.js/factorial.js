// this is exercise to solve and create factorial of number taking number or write to create factorial function 
// so,, there are four method to create facotrial. 
// 1.function
// 2.for loops
// 3.reduce for array method 
// this are the meethod to create factorial function


function getfactiroal(n) {
    if(n < 0) return "undefined error";
    let result = 1;
    for(let i = 2; i<= n; i++){
        result *= i;
    }
       return result;
}

console.log(getfactiroal(5));


