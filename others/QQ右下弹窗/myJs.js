var ad = document.getElementById("ad");
var btn = document.getElementById("btn");
btn.onclick = function(){
    //ad.style.display = "none";
    notShowValue = setInterval(notShow,5);
}
var showValue;
var notShowValue;
var adHeight = 0;
window.onload = function(){
    showValue = setInterval(show,5);  
}
function show(){
    if (adHeight < 225){
        adHeight++;
        ad.style.height = adHeight + "px";
    }
    else{
        clearInterval(showValue);
    }       
} 

function notShow(){
    if (adHeight > 0){
        adHeight--;
        ad.style.height = adHeight + "px";
    }
    else{
        clearInterval(notShowValue);
    }  
}