let a = [23,3,41,52]

for (let index = 0; index <a.length; index++) {
    const element = a[index];
    console.log(element)
}


a.forEach((value,index,arr) => {
   console.log(value,index,arr) 
})
let obj = {
a: 1,
b:2,
c:3,
d:5
};

for (let index = 0; index < obj.length; index++) {
   const element = obj[index];
   console.log(key,element)
}

for (const value of a ){
   console.log(value)
}

for (const element of object) {
   
}