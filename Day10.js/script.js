console.log("hello prince")
console.log("i am mantu")

setTimeout(() => {
    console.log("i am inside the js note")
},0);

console.log("the end of art")


// this are callback function syntax method one function callback to another function // 
const f = (arg) =>{
    console.log(arg)
}
const callback = (arg) => {
    console.log(arg)
    f("all is well")
}
const loadscript =(callback) =>{
   let sc = document.createElement("script");
//    sc.src = src;
   sc.onload = callback("prince bhai","all is well")
   document.head.append(sc);

} 
loadscript(callback);