$.validator.setDefaults({
    submitHandler: function(){
        alert("提交事件(取消按钮跳过验证)");
    }
});

$(document).ready(function(){
    $("#form1").validate({
        errorLabelContainer: $("#form1 div.error"),
    });
    var validator = $("#form2").validate({
        errorContainer: "div.container",
        errorLabelContainer: $("ol","div.container"),
        wrapper: "li"
    }
    );
    $("#form2 input.cancel").click(function(){
        validator.resetForm();
    })
})