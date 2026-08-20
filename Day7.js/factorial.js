// by solve factorial question using function //
let a = 6
function factorial(number){
    let arr = Array.from(Array(number + 1).keys())
    let c = arr.slice(1,).reduce((a,b)=>{
    return a * b
})
  return c
}

// solve factoral question by using for loops //
function forfic(num){
   let fact = 1;
    for (let index = 1; index <= num; index++) {
        fact = fact * index
    }
    return fact 
}
console.log(forfic(6))
console.log(factorial(6))

// doms question solve //
// let box = document.getElementsByClassName("box")
// console.log(box)
// box[2].style.backgroundColor = "pink"
// document.querySelector(".box").style.backgroundColor= "blue"
// document.getElementById("5").style.backgroundColor = "red";
