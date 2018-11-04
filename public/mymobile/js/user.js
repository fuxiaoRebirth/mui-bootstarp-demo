
var userInfo = null;

$.ajax({
    url:"/user/queryUserMessage",
    type:"get",
    async:false,
    success:function(res){
        userInfo = res; 
        
        if(res.error && res.error==400){
            location.href = "login.html";      
        }
    }
})

$(function () {
    $('#outLogin').on('click', function () {
        $.ajax({
            url: "/user/logout",
            type: "get",
            success: function (res) {
                console.log(res);
                if (res.success) {
                    mui.toast('退出登陆成功');
                    setTimeout(function () {
                        location.href = "index.html";
                    }, 2000);
                }
            }
        })
    })

    var html= template('tem',userInfo);
    
    $('#user-box').html(html);
})