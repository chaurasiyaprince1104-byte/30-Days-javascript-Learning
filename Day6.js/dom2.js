console.log("harry")
// first contain all element in one varirable and print it //
let box = document.getElementsByClassName("box")
console.log(box)
box[3].style.backgroundColor = "red"

// by apply color on specific id and class //
document.getElementById("vs").style.backgroundColor = "blue"

// inline selector by js //
document.querySelector(".box").style.backgroundColor = "yellow"

// to apply same color on one time so to use for loops //
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "pink"
})

// to check that some element or class are match the container or not //
e = document.getElementsByTagName("div")
// element match method uses //
e[3].matches("#vs")

e[4].matches("#vs")

e[4].matches(".box")

// @element contain method uses //
document.querySelector(".container").contains(e[2])

document.querySelector(".container").contains(e[0])

document.querySelector(".container").contains(document.querySelector("body"))

document.querySelector("body").contains(document.querySelector(".container"))


