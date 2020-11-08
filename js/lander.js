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