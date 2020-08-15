var list=document.getElementById("list");

firebase.database().ref("todos").on('child_added',function (data){
     //   create li tag with textnode
    var li =document.createElement("li")
    var litext=document.createTextNode(data.val().value)
    
    li.appendChild(litext)
    li.setAttribute("class","text")
// create delete btn
    var delbtn=document.createElement("button")
    var deltext=document.createTextNode("Remove")
    delbtn.appendChild(deltext)
    delbtn.setAttribute("id",data.val().key)
    delbtn.setAttribute("class"," progress-bar-striped btn-md p-2 ml-3 mt-2 mr-2 btn btn-warning ")
    delbtn.setAttribute("onclick","deleteitem(this)")


    // create edit btn

    var editbtn=document.createElement("button")
    var edittxt=document.createTextNode("Edit")
    editbtn.appendChild(edittxt)
    
    editbtn.setAttribute("class"," progress-bar-striped btn-md p-2 ml-3 mt-2 mr-2 btn btn-secondary")


    editbtn.setAttribute("id",data.val().key)
    editbtn.setAttribute("onclick","edititem(this)")


    li.appendChild(delbtn)
    li.appendChild(editbtn)
    
    list.appendChild(li)
})

function addtodo(){
    var todo_item=document.getElementById("todo_item")
    var database=firebase.database().ref("todos")    
    var key = database.push().key;
var todo={
    value:todo_item.value,
    key:key
}
    database.child(key).set(todo)

    todo_item.value=""
}

function edititem(e){

    
    var editvalue=  prompt("Enter Updated Value",e.parentNode.firstChild.nodeValue)
    var edittodo={
        value : editvalue,
        key: e.id
    }

    firebase.database().ref('todos').child(e.id).set(edittodo)
    e.parentNode.firstChild.nodeValue=editvalue;


}

function deleteitem(e){
    firebase.database().ref('todos').child(e.id).remove()
    e.parentNode.remove()

}

function deleteAll(){
    firebase.database().ref('todos').remove();
    list.innerHTML=""

}