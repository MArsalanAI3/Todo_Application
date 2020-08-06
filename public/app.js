var list=document.getElementById("list");



function addtodo(){
    var todo_item=document.getElementById("todo_item")
    var li =document.createElement("li")
    var litext=document.createTextNode(todo_item.value)
    
    li.appendChild(litext)
    li.setAttribute("class","text")

    var delbtn=document.createElement("button")
    var deltext=document.createTextNode("Remove")
    delbtn.appendChild(deltext)
    

    delbtn.setAttribute("class"," progress-bar-striped btn-md p-2 ml-3 mt-2 mr-2 btn btn-warning ")

    delbtn.setAttribute("onclick","deleteitem(this)")

    var editbtn=document.createElement("button")
    var edittxt=document.createTextNode("Edit")
    editbtn.appendChild(edittxt)
    
    editbtn.setAttribute("class"," progress-bar-striped btn-md p-2 ml-3 mt-2 mr-2 btn btn-secondary")



    editbtn.setAttribute("onclick","edititem(this)")


    li.appendChild(delbtn)
    li.appendChild(editbtn)
    
    list.appendChild(li)
    todo_item.value=""


    console.log(li)
    console.log(todo_item.value)
}

function edititem(e){

    var val=e.parentNode.firstChild.nodeValue;
    var editvalue=  prompt("Enter Updated Value",e.parentNode.firstChild.nodeValue)
    
    e.parentNode.firstChild.nodeValue=editvalue;


}

function deleteitem(e){

    e.parentNode.remove()

    console.log(e)   
}

function deleteAll(){
    list.innerHTML=""

}