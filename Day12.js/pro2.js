console.log('hello tr 45');

let prom1 = new Promise((resolve, reject) => {

    let a = Math.random();

    if (a > 0.5) {
        reject("no error deduction");
    } else {
        setTimeout(() => {
            console.log("i am done nothing have write write now");
            resolve("prince");
        }, 3000);
    }

});

let prom2 = new Promise((resolve, reject) => {

    let a = Math.random();

    if (a < 0.5) {
        reject("no error deduction 2"); 
    } else {
        setTimeout(() => {
            console.log("i am done nothing have write write now 2");
            resolve("prince 2");
        }, 1000);
    }

});
let prom3 = Promise.allSettled([prom1,prom2])
prom3.then((a) => {
    console.log(a);
}).catch((error) => {
    console.log(error);
});
