$(document).ready(function(){
//---------------------------------------------------------------------------------------//
$("#login").click(function(){
    $.ajax({
        url: 'http://www.mywebsite.com/checklogin?user='+encodeURIComponent($("#loginusername").val())+'&pass='+encodeURIComponent($("#loginpassword").val()),
        success:function(data){
            if(data == "OK")
            {
                $("#first").hide();
                $("#second").append("<p>Hello, admin</p> <br/><input type='button' id='logout' value='Log Out' />");
            }
            else
            {
                alert("Please try again");
            }
        }
    });
});
//---------------------------------------------------------------------------------------//
$("#logout").click(function() {
    $("form")[0].reset();
    $("#first").show();
    $("#second").hide();
});
});
//---------------------------------------------------------------------------------------//

//I have not finish this code yet, I will ask Mr. Sergio for help-----------------------//