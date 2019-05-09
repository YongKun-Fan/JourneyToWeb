var btnLeft = document.getElementById("btn-left"),
    btnRight = document.getElementById("btn-right"),
    imgs = document.getElementsByClassName("imgs")[0],
    lis = document.getElementsByTagName("li");

btnLeft.onclick = function(){
    if (moveFlage == false) return;
    var index = Math.abs((imgs.offsetLeft + 520)/520) - 1;
    if (index == -1) index = 4;
    lis[index].className = "active";
    for (var j=0; j<lis.length; j++){
        if(j != index) lis[j].className = "";
    }
    moveImg(520); 
}

btnRight.onclick = function(){
    if (moveFlage == false) return;
    var index = Math.abs((imgs.offsetLeft - 520)/520) - 1;
    if (index == 5) index = 0;
    lis[index].className = "active";
    for (var j=0; j<lis.length; j++){
        if(j != index) lis[j].className = "";
    }
    moveImg(-520);
}


for (var i=0; i<lis.length; i++){
    lis[i].index = i;   
    lis[i].onclick = function(){
        var dis = (-520 * (this.index+1)) - imgs.offsetLeft;       
        moveImg(dis);
        this.className = "active";
        for (var j=0; j<lis.length; j++){
            if(j != this.index) lis[j].className = "";
        }              
    }   
}
var moveFlage = true;
var timer,timer2;
function moveImg(dis){
    moveFlage = false;
    var time = 400;
    var eachTime = 20;
    var eachDis = dis/(time/eachTime);
    var number = 0;
    var flage = time/eachTime;
    timer = setInterval(function(){eachMove(flage);},eachTime);
    function eachMove(flage){
        number++;
        imgs.style.left = (imgs.offsetLeft + eachDis) + "px";
        if(imgs.offsetLeft >= 0){
            imgs.style.left = -520*5 + "px";
        }
        if(imgs.offsetLeft <= -520*6){
            imgs.style.left = -520 + "px";
        }
        if(number == flage) {
            clearInterval(timer);
            moveFlage = true; 
        }
    }     
}

var container = document.getElementsByClassName("container")[0];
container.onmouseout = function(){
    timer2 = setInterval(btnRight.onclick,1500);
    btnLeft.style.display = "none";
    btnRight.style.display = "none";
}
container.onmouseover = function(){
    clearInterval(timer2);
    btnLeft.style.display = "block";
    btnRight.style.display = "block";
}