$(function(){
    $('#register-btn').on('click',function(){
        console.log(1);
        var username = $('[name=username]').val();
        var password = $('[name = password]').val();
        if(!username){
            mui.toast('请输入用户名') 
            return;
        }
        if(!password){
            mui.toast('请输入用户名') 
            return;
        }
        $.ajax({
            url:"/user/login",
            type:"post",
            data:{
                username:username,
                password:password
            },
            beforeSend:function(){
                $('#resgister-btn').val('正在登陆...')
            },
            success:function(res){
                console.log(res);
                if(res.success){
                    $('#resgister-btn').val('登陆');
                    mui.toast('登陆成功') 
                    setTimeout(function(){
                        location.href = "user.html";
                    },2000)
                }else{
                    mui.toast('您的用户名或密码有误');  
                }
            }
        })
    })
})