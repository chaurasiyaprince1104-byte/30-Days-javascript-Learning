// this code are similar to the day6 not much same so this is pratices on it and also solve exercise solution//


document.body.childNodes[1].lastElementChild.style.Color = "black";
// show body html which show their child last name with apply backgroundcolor //
document.body.childNodes[1].lastElementChild.style.backgroundColor = "pink";
// show childnodes parent name like html parent name //
document.body.childNodes[1].parentElement
// show childnodes parent name like html parent name with last name //
document.body.childNodes[1].lastElementChild.parentElement
// show childnodes children name one by one //
document.body.firstElementChild.children
// show childnodes parent name like html parent name //
document.body.childNodes[1].firstElementChild.children
// give html first child name //
document.body.firstElementChild
// give html second child name //
document.body.firstElementChild.children[2]

// @element contain method uses //
document.querySelector(".container").contains(e[2])

document.querySelector(".container").contains(e[0])

document.querySelector(".container").contains(document.querySelector("body"))

document.querySelector("body").contains(document.querySelector(".container"))


