
// promise method in js //
console.log("hello prince")

let prom1 = new promise ((resolve, reject) => {
    let a = Math.ramdom();
    if(a < 0.5){
        reject("no error deduction ")
    }
    else{
       setTimeout(() => {
        console.log("i am done nothing have write write now")
        resolve("prince")
    }, 3000);
    }
})
prom1.then((a) => {
    console.log(a)
}).catch((error)=>{
    console.log(error)
})