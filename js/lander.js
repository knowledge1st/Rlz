$(document).ready(function(){
    $("#token").text(Cookies.get('X-Token'));
    $("#user").text(Cookies.get('X-User'));
});