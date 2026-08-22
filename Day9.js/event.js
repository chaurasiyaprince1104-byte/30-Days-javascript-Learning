let button = document.getElementById("btn")


button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = "<b> yehhh you were click </b> enjoy your clicking brother"
})

button.addEventListener("contextmenu",()=>{
    alert ("dont hack right click!!!warn you")
})
button.addEventListener("keydown",(e)=>{
    alter(e,e.key,e.key)
})