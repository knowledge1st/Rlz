$(document).ready(function(){
    
  });

$("#login").click(()=>{
    let url_auth= 'https://410iwdz3t5.execute-api.us-east-2.amazonaws.com/develop/authx'
    $.ajax(url_auth,{
        contentType: 'application/json',
        data: JSON.stringify({ "username": $("#username").val(), "password": $("#password").val()}),
        dataType: 'json'})
        .then((data)=>{
        alert(data);
    });
  });
