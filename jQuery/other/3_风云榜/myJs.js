$(document).ready(function(){
    $("span").click(function(){
        $(this).text()=="+" ? $(this).text("-") : $(this).text("+");
        $(this).parent().toggleClass("active").siblings().removeClass("active");
        $(this).parent().siblings().children("span").text("+");
    });
})