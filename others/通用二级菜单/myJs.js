var liArray = document.getElementsByClassName("topBar-list")[0].getElementsByTagName("li");
for (var i=0; i<liArray.length; i++){
    liArray[i].onmousemove = function(){
        this.className = "show";
    }
    liArray[i].onmouseout = function(){
        this.className = "";
    }
}