function doSomething()
{  
    //  var toDoInput=prompt('GIve a task name: ');

    var item=document.getElementById("toDoInput").value
    var text=document.createTextNode(item)
    var newItem=document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("doSomething").appendChild(newItem)
 
}

