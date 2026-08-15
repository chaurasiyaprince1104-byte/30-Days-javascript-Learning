 let a = 6
function factorial(number){
    let arr = Array.from(array(number + 1).keys())
    let c = arr.slice(1,).reduce((a,b)=>{
    return a * b
})
  return c
}


function forfic(num){
   let fact = 1;
    for (let index = 1; index <= num; index++) {
        fact = fact * index
    }
    return fact 
}
console.log(forfic(6))
console.log(a)
