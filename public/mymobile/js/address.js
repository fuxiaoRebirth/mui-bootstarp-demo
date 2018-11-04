$(function(){
    var address = null;
    $.ajax({
        url:"/address/queryAddress",
        type:"get",
        success:function(res){
            address = res;
           var html =  template('tpl',{result:res});
           $('#addressBox').html(html);
        }
    })

    $('#addressBox').on('click','#edi-btn',function(){
        var id = $(this).data('id');
        for(i=0;i<address.length;i++){
            if(id==address[i].id){
                localStorage.setItem("edi",JSON.stringify(address[i]));          
            }
            break;
        }
        //如果是编辑页面跳转到添加页面就跟随isEdi=1;
        location.href = "addAddress.html?isEdi=1";
    })
})