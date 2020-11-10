$(document).ready(function(){
    let _token=Cookies.get('X-Token');
    let _user=Cookies.get('X-User')
    if (!_token){
        window.location.href = 'https://knowledge1st.github.io/Rlz/index.html';
        Cookies.remove('X-Token');
        Cookies.remove('X-User');
    }
    $("#token").text(_token);
    $("#user").text(_user);
});

$("#getdata").click(()=>{
    let url_data='https://410iwdz3t5.execute-api.us-east-2.amazonaws.com/develop/rlz-data';
    $.ajax({
        url:url_auth,
        type:'POST',
        contentType: 'application/json',
        headers: { 
            'X-User': Cookies.get('X-User'),
            'X-Token':Cookies.get('X-Token')
        }
    }).done((data)=>{
        $("#datarlz").text(data);
    });
})