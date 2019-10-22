$(document).ready(function(){
    $(".table ul li").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".tab-content>div:eq(" + $(this).index() + ")").css("display","block").siblings().css("display","none");
    });
    $(".china-news #agree").click(function(){
        //alert($(this).prop("checked"));
        $("#next").prop("disabled",!$(this).prop("checked"));
    })
})