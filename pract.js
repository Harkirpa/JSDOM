var popupParent=document.getElementById("createpopup")

function createpopup(){
    var newpopup=document.createElement("div")
    var popuptext=document.createElement("h1")
    var popupclose=document.createElement("p1")

    popupParent.appendChild(newpopup)
    popuptext.appendChild(popuptext)
    popuptext.appendChild(popupclose)

    popuptext.innerText="Task1"
    popuptext.innerText="Task description"
}