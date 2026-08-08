
let object ={ //forin loops//
    name: "prince",
    company:"rajhans",
    year:2016
}
for (const key in object) {
     const element = object[key];
     console.log(key)
}
let a = 10
for (let i = 10; i < 100;i++) { //for loops//
    console.log(a+i);
    // const element = array[i];
}

let object ={ //forof loops//
     name: "prince",
     company:"rajhans",
     year:2016
}
for (const c of "prince") {
    console.log(c)
}
let a = 2
while(a<100){
    console.log(a)
    a++;
}

let a = 11
do {
    console.log(a)
    a++
} while (a<10);