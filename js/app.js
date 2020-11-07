$(document).ready(function(){
    
  });

$("#login").click(()=>{
    let url_auth= 'https://410iwdz3t5.execute-api.us-east-2.amazonaws.com/develop/authx'
    $.post(url_auth).then(()=>{
        alert(data);
    });
  });
