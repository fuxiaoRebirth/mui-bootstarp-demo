$(function(){
    // 点击注册按钮看有没有不符合规则的
    $('#register-btn').on('click',function(){
        var username = $('[name = username]').val();
        var password = $('[name = password]').val();
        var againPassword = $('[name = againPassword]').val();
        var vCode = $('[name = Vcode]').val();
        var mobile = $('[name = mobile]').val();
        if(!username){
            mui.toast('请输入用户名') 
            return;
        }
        if(mobile.length!=11){
            mui.toast('请输入正确的手机号') 
            return;
        }
        if(!password){
            mui.toast('请输入密码') 
            return;
        }
        if(password!=againPassword){
            mui.toast('两次密码输入的不一致') 
            return;
        }
        data = {
            username:username,
            password:password,
            mobile:mobile,
            vCode:vCode
        }
        $.ajax({
            url:"/user/register",
            type:'post',
            data: data,
            success:function(res){
                console.log(res);
                if(res.success){
                    mui.toast('注册成功') 
                    setTimeout(function(){
                        location.href="login.html";
                    },2000)
                }else{
                    mui.toast('输出有误') 
                }
            }
        })
    })
   
    $('.getCode').on('click',function(){
        $.ajax({
            url:"/user/vCode",
            type:'get',
            success:function(res){
                console.log(res.vCode);
            }
        })
    })
})