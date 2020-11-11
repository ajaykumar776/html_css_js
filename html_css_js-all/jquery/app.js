$(document).ready(function(){
    $("#part-1 p").css("color", "green");
    // $("#part-1").find("p").css("color", "green");
    $("#part-1 p").on("click", function(){
        $(this).css("color", "blue");
    })

    $("#mybtn").click(function(){
        $("#part-2 p").toggle()
    })

    $("#btn3").click(function(){
        var name = $("#input3").val();
        alert("Hello "+name+", Have a nice day");
        $("#input3").val("");
    })

    $("#input4").keyup(function(){
        var text = $(this).val();
        $("#message4").html('<b>'+text+'</b>');
    })
})