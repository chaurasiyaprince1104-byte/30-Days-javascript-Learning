let box = document.querySelector(".container").children
console.log(box)

function getrandom (){
    let val1 = Math.ceil(Math.random() * 255);
    let val3 = Math.ceil(Math.random() * 255);
    let val2 = Math.ceil(Math.random() * 255);

 return `rgb(${val1},${val2},${val3})`;
}
Array.from(box).forEach(e =>{
    e.style.backgroundColor = getrandom()
    e.style.color = getrandom()
})
