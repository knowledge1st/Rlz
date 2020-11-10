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
        if(data.statusCode==200){
            Cookies.withAttributes({ expiers:0.01 ,sameSite: 'None', secure: true })
            Cookies.set('X-Token', data.body.authorized.token);
            Cookies.set('X-User', $("#username").val());
            window.location.href = 'https://knowledge1st.github.io/Rlz/lander.html';
        }
    })
  });
