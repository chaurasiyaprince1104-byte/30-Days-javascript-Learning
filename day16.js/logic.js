console.log('promise tu to chal jana');

let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a < 0.5){
        reject("not any number support you 1")
    }
    else{
    setTimeout(() => {
        console.log("its done bro 1")
        resolve("prince")
    }, 2000);}
})

let prom2 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a < 0.5){
        reject("not any number support you 2")
    }
    else{
    setTimeout(() => {
        console.log("its done bro 2")
        resolve("prince")
    }, 2000);}
})

let prom3 = Promise.allsettled([prom1,prom2])
prom3.then((a)=>{
    console.log(a)
}).catch(err =>{
    console.log(err)
})


