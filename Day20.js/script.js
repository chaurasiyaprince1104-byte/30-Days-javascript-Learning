// async function sleepmood() {
//    return  new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(45)
//     }, 1000);
//    })
// }

// (async function main(){
// let a = await sleepmood()
// console.log(a)
// let b = await sleepmood()
// console.log(b);
// })()


// let [a,b,...rest] = [2,3,6,8,9]
// console.log(a,b,rest);

let obj = {
    a: 2,
    b : 56,
    c: 45
}

let {a,b} = obj;
console.log(a,b)