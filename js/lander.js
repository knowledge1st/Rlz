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
        url:url_data,
        type:'POST',
        contentType: 'application/json',
        headers: { 
            'x-user': Cookies.get('X-User'),
            'x-token': Cookies.get('X-Token')
        },
        data:{
            search_info: {
                method: "day_between",
                param1: "2020-10-20T00:00:00Z",
                param2: "2020-10-30T00:00:00Z"
          }
        }
    }).done((data)=>{
        $("#datarlz").text(JSON.stringify(data)+'here');
    });
})