let random = Math.random()
let a = prompt("enter first number")
let b = prompt("enter second number")
let c = prompt("enter equation")

let obj = {
    "+": "-",
    "-":"+",
    "*":"/",
    "/":"*"
}
if(random > 1){
    // perfom write calculation 
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
else{
    // perfrom incorrect calculation 
     c = obj[c]
     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}     

// alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
