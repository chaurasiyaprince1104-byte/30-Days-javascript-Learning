let a = [2,3,8,65,45];
let new_arry = []
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    new_arry.push(element ** 2)
}

// map in array //
let new_arry = a.map((e,index,arry)=>{
  return e ** 2
})
console.log(new_arry)

// filter in array //
const graterthanseven =(e)=>{
    if(e > 7){
        return true 
    }
    return false 
}
 console.log(a.filter(graterthanseven))


//  reduce in array //
let b = [2,34,4,5,6]
const addition = (a,b) =>{
    return a * b 
}
console.log(b.reduce(addition))

