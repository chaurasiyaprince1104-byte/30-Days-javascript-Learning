function nice(name) {
    console.log("hey " + name + " you are the nice person")
    console.log("hey " + name + " you are the good person")
    console.log("hey " + name + " you are the really fantastic person")
}

nice("rahul")
nice("prince")

function sum(a,b,c=3) {
    return a + b + c 
}

result1 = sum(2 , 3)
result2 = sum(4,6)
result3 = sum(34,38)
console.log("the sum of two value is::",result1)
console.log("the sum of two value is::",result2)
console.log("the sum of two value is::",result3)

const func01 = (x) => {
    console.log("this is the arrow function",x);
}

func01(23)  
func01(34)

