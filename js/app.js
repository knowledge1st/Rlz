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
            let _30minutes = new Date(new Date().getTime() + 30 * 60 * 1000);
            console.log(_30minutes)
            Cookies.set('X-Token', data.body.authorized.token, { expiers:_30minutes ,sameSite: 'None', secure: true });
            Cookies.set('X-User', $("#username").val(), { expires:_30minutes ,sameSite: 'None', secure: true });
            window.location.href = 'https://knowledge1st.github.io/Rlz/lander.html';
        }
    })
  });
