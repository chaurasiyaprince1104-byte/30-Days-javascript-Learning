// this has,set,get attribute are uses to by js in html that give excate class id //

document.querySelector(".box1").hasAttribute("style")
true
document.querySelector(".box1").getAttribute("style")
 'display:flexbox'
document.querySelector(".box1").setAttribute("style","display:inline")
 undefined
document.querySelector(".box1").setAttribute("style","display : inline")
 undefined/
document.querySelector(".box1").getAttribute("style")
'display : inline'
document.querySelector(".box1").attributes
// {0: class, 1: style, class: class, style: style, length: 2}
document.querySelector(".box1").removeAttribute("style")
undefined

// give changeing the user who wirte only designmode on and then work on //
document.querySelector(".box1").desginmode = "on"

// box1 content of the data give on //
document.querySelector(".box1").innerHTML

// box1  outer content of the data give on //
document.querySelector(".box1").outerHTML

// the parent data as you write they give as //
document.querySelector(".container").innerHTML

// they give outer data of the parent table //
document.querySelector(".container").outerHTML

// tagename saw all name of the child data //
document.querySelector(".container").tagName

// nodetype are same as tagname //
document.querySelector(".container").nodeType

// they give all text data of container //
document.querySelector(".container").textContent

// they give data how many div are hidden or not //
document.querySelector(".container").Hidden
 false
document.querySelector(".container").hidden = true
 true

//  the dataset tag are uses since in html which are not any uses //
document.querySelector(".box1").dataset
//  DOMStringMap {createdby: 'prince', conceptby: 'laksh'}

// the class list is work on class name they give all name of the classes //
document.querySelector(".container").classList
// DOMTokenList(4) ['container', 'grren', 'red-blue', 'purple', value: 'container grren red-blue purple']

// they give only name of the clas does not matter how much are name in one class //
document.querySelector(".container").className
'container grren red-blue purple'

// if you add  external name in class so uses .add //
 document.querySelector(".container").classList.add("prince")
undefined

// and get the output also they give name //
document.querySelector(".container").className
'container grren red-blue purple prince'

// if you want to delete the existing name in the class //
document.querySelector(".container").classList.remove("prince")
undefined

// and get the output also they remove name //
document.querySelector(".container").className
'container grren red-blue purple'

// this are the most imp ans uses in js toggle which means that as change or some add in toggle() //
document.querySelector(".container").classList.toggle("grren")
false


// this are the most imp ans uses in js toggle which means that as change or some add in toggle()
document.querySelector(".container").classList.toggle("grren")
true