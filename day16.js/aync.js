// function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//             // console.log("hello prince")
//         }, 3500);
//     })
// }

async function getdata(){
    let x = await fetch('https://jsonplaceholder.tyicode.com/todos/1')
    let data = await x.json()
    console.log(data)
}
async function main() {

    console.log("loading ")
    console.log('so something else');
    console.log('log data');
    let data = await getdata()
    console.log(data);
        console.log(data);
        console.log('process data');
        console.log('finsih');
    
}

main()