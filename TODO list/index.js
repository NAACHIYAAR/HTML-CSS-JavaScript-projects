var ul=document.getElementById("ullist")
    var inputitem=document.getElementById("enteritem")
    function update(){
        var listitem=document.createElement("li")
        listitem.innerHTML=inputitem.value + "<button onclick=\"deleteitem(event)\">Delete</button>"
        ul.append(listitem)
    }
    function deleteitem(event){
        event.target.parentElement.remove()
    }