$(function(){
    var vCode = null;
    $('#modify-btn').on('click',function(){
        console.log(1);
        var orginPass =  $('[name ="orginPass"]').val();
        
        var newPass = $('[name = "newPass"]').val();
        console.log(newPass);
        if(!orginPass){
            alert('密码错误');
            return;
        }
        if(!newPass){
            return;
        }
        $.ajax({
            url:"/user/updatePassword",
            type:"post",
            data:{
                oldPassword:orginPass,
                newPassword:newPass,
                vCode:vCode
            },
            success:function(res){
                console.log(res);
                if(res.success){
                    location.href = "login.html"
                }
            }
        })
    })
    $('.getCode').on('click',function(){
        $.ajax({
            url:"/user/vCodeForUpdatePassword",
            type:'get',
            success:function(res){
                vCode = res.vCode;
                console.log(res.vCode);
            }
        })
    })
})