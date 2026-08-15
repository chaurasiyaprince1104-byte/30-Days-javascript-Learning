console.log("hello world")
// show all body element //
document.body
// show all body with their childs //
document.body.childNodes
// show body head which represent by 0 //
document.body.childNodes[0]
// show body html which represent by 1 //
document.body.childNodes[1]
// show body html which show their child last name // 
document.body.childNodes[1].lastChild
// show body html which show their child first name // 
document.body.childNodes[1].firstElementChild
// show body html which show their child last name // 
document.body.childNodes[1].lastElement.ChildElementChild
// show body html which show their child last name with apply color // 
document.body.childNodes[1].firstElementChild.style.color = "red";
// show body html which show their child first name with apply backgroundcolor // 
document.body.childNodes[1].firstElementChild.style.backgroundColor = "red";
// show body html which show their child first name with apply color //
document.body.childNodes[1].firstElementChild.style.Color = "black";
// show body html which show their child last name with apply color //
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
// give html next second child name which why sibling //
document.body.firstElementChild.children[2].nextElementSibling
// give html previous second child name //
document.body.firstElementChild.children[2].previousElementSibling
