var leftImg = document.getElementsByClassName("left")[0].getElementsByTagName("img");
var rightImg = document.getElementsByClassName("right")[0].getElementsByTagName("img");
var pointer = document.getElementsByClassName("pointer");
var container = document.getElementsByClassName("container");
container[0].onmouseleave = mouseLeave;
var changeShow = null; var myIndex = 0;
container[0].onmouseover = function(){
    clearInterval(changeShow);
    myIndex = 0;
}

for (var i=0; i<leftImg.length; i++){
    leftImg[i].onmouseover = mouseOver;
    leftImg[i].index = i; 
}

function mouseLeave(){
    changeShow = setInterval(change,1000);   
}
function change(){
    var index = myIndex % 3;
    myIndex++;
    var array = [0,85,170];
    //var index = Math.round((Math.random() * 3));
    pointer[0].style.top = array[index] + "px";
    for(var i=0; i<rightImg.length; i++){
        rightImg[index].className = "show";
        if(i!=index) rightImg[i].className = "";       
    }    
}

function mouseOver(){
    for (var i=0; i<rightImg.length; i++){
        if(i==this.index){
            rightImg[i].className = "show";
        }
        else{
            rightImg[i].className = "";
        }
    }
    switch (this.index){
        case 0: {
            pointer[0].style.top = 0 + "px";
            break;
        }
        case 1: {
            pointer[0].style.top = 85 + "px";
            break;
        }
        case 2: {
            pointer[0].style.top = 170 + "px";
            break;
        }

    }
    console.log(this.index);
}