$(document).ready(function(){
    $(window).unload(function(){
        alert("不要离开我啊！");
    });
    $(window).scroll(function(){
        //alert("来吧，一起摇滚！" + $(this).scrollTop());
        $("div").text("" + $(this).scrollTop());
    });
    $(window).resize(function(){
        alert("跟着我的脚步，变化吧！");
    });
    $("input,textarea").select(function(e){
        alert("MD，那个家伙老是选我 " + e.target.tagName);
        var start = e.target.selectionStart;
        var end = e.target.selectionEnd;
        alert($(this).val().slice(start,end));
    });
});