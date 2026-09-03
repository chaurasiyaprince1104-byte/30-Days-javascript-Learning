console.log("prince there!!!")

setTimeout(() => {
    console.log("hello world")
}, 1);

const callback = (arg) =>{
    console.log(arg);

}

const loadscript = (callback) =>{
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("prince");
    document.head.append(sc);
}

loadscript(callback)