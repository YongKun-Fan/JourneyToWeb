var tabs = document.getElementById("tab").getElementsByTagName("li");
var ulArray = document.getElementsByClassName("seckill-goods")[0].getElementsByTagName("ul");
for(var i = 0;i < tabs.length; i++){
    tabs[i].onclick = showList;
}

var seckillNav = document.getElementsByClassName("seckill-nav");
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 260){
        seckillNav[0].className = "seckill-nav navfixed";
    }
    else{
        seckillNav[0].className = "seckill-nav";
    }
}

var timeToBegin = new Date();
timeToBegin.setHours(18);
timeToBegin.setMinutes(0);
timeToBegin.setSeconds(0);
timeToBegin.setMilliseconds(0);
var deadline = timeToBegin.getTime();

setInterval(show,1000);
function show(){
    var timeNow = new Date();
    console.log(timeNow);
    var now = timeNow.getTime();
    var timeDis = deadline - now;
    var strToShow;
    if (timeDis <= 0 ){
        strToShow = "正在进行中";
    }
    else{
        var tH = Math.floor(timeDis/1000/60/60);
        var tM = Math.floor((timeDis - tH*60*60*1000)/1000/60);
        var tS = Math.floor((timeDis - tH*60*60*1000 - tM*60*1000)/1000);
        var str = tH.toString() + ":" + tM.toString() + ":" + tS.toString();
        strToShow = "<em>18:00</em><span><em>即将开始<br />距开始 " + str + "</em></span>";
    }
    var timeKill =  document.getElementById("time");
    timeKill.innerHTML = strToShow;
}

function showList(){
    for(var i=0; i<tabs.length; i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            ulArray[i].id = "active";
        }
        else{
            tabs[i].className = "";
            ulArray[i].id = "";
        }
    }
}