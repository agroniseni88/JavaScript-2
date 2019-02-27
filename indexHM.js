function doSomething()
{

   var item=document.getElementById("toDoInput").value
   var text=document.createTextNode(item)
   var newItem=document.createElement("li")
   newItem.appendChild(text)
   document.getElementById("doSomething").prepend(newItem)
   let count=document.getElementById("doSomething").childElementCount
   console.log(count)
   document.getElementById("cnt").innerText=count

};

