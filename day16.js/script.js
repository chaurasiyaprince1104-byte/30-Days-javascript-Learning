console.log("hello print 1")
console.log("world print 2")

setTimeout(() => {
    console.log("hello world print 3")
}, 0);

console.log("mafia world print 4")


const fun =() => {
    console.log("nothing")
}
const callback = (arg,fun)=>{
    console.log(arg)
    fun()
}

const loadscript = (src,callback) =>{
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("raj",fun);
    document.head.append(sc)
}

loadscript("callback");

 
