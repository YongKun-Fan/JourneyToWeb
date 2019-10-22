$(document).ready(function () {
    timer = setInterval("autoPlay()", 2000);
    $("#container,span, #circles li").mouseover(function(){
        clearInterval(timer);
    });
    $("#container,span, #circles li").mouseout(function(){
        timer = setInterval("autoPlay()", 3000);
    });
    $("#arrowLeft").click(leftPlay);
    $("#arrowRight").click(rightPlay);
    $("#circles li").click(function(){
        var index = $(this).index();
        $("#imgs").animate({left: -index*400+"px"}, 1000);
        $("#imgs li.active").removeClass("active");
        $(index+1+"").addClass("active");
        $("#circles li.active").removeClass("active");
        $(this).addClass("active");
    });
});


var timer;

function autoPlay() {
    var index = parseInt($("#imgs li.active").prop("id"));
    var disLeft = -index * 400;
    if (index == 6) {
        $("#imgs").animate({ left: disLeft + "px" }, 1000, function () {
            $("#imgs").css("left", "0");
            $("#imgs li:first").addClass("active");
            $("#circles li:first").addClass("active");
        });
    } else {
        $("#imgs").animate({ left: disLeft + "px" }, 1000);
        $("#" + (index + 1)).addClass("active");
        $("#circles li:eq("+index+")").addClass("active");
    }
    $("#" + index).removeClass("active");
    $("#circles li:eq("+(index-1)+")").removeClass("active");
}

function leftPlay(){
    var disLeft;
    var index = parseInt($("#imgs li.active").prop("id"));
    if (index == 1){
        $("#imgs").css("left", "-2400px");
        $("#imgs").stop(true).animate({left: "-2000px"}, 1000);
        $("#imgs li:first").removeClass("active");
        $("#6").addClass("active");
        $("#circles li:eq(0)").removeClass("active");
        $("#circles li:eq(5)").addClass("active");
    }else{
        disLeft = -(index-1)*400;
        $("#imgs").stop(true).animate({left: disLeft+400+"px"}, 1000);
        $("#"+index).removeClass("active");
        $("#"+(index-1)).addClass("active");
        $("#circles li:eq("+(index-1)+")").removeClass("active");
        $("#circles li:eq("+(index-2)+")").addClass("active");
    }
}

function rightPlay(){
    var disLeft;
    var index = parseInt($("#imgs li.active").prop("id"));
    if (index == 6){
        $("#imgs").stop(true).animate({left: "-2400px"}, 1000, function(){
            $("#imgs").css("left","0");
        });
        $("#imgs #6").removeClass("active");
        $("#imgs li:first").addClass("active");
        $("#circles li:eq(5)").removeClass("active");
        $("#circles li:eq(0)").addClass("active");
    }else{
        disLeft = -(index-1)*400;
        $("#imgs").stop(true).animate({left: disLeft-400+"px"}, 1000);
        $("#"+index).removeClass("active");
        $("#"+(index+1)).addClass("active");
        $("#circles li:eq("+(index-1)+")").removeClass("active");
        $("#circles li:eq("+index+")").addClass("active");
    }
}

