$(document).ready(function(){
    
  });

$("#login").click(()=>{
    let url_auth= 'https://410iwdz3t5.execute-api.us-east-2.amazonaws.com/develop/authx'
    $.ajax({
        url:url_auth,
        type:'POST',
        contentType: 'application/json',
        data: JSON.stringify({ "username": $("#username").val(), "password": $("#password").val()})
    }).done((data)=>{
        alert(JSON.stringify(data));
        Cookies.set('X-Token', data.body.authorized.token, { sameSite: 'None', secure: true });
        Cookies.set('X-User', $("#username").val(), { sameSite: 'None', secure: true });
    })
  });
