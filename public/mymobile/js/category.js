$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    // 分类左侧请求数据
    $.ajax({
        url: "/category/queryTopCategory",
        type: "get",
        success: function (res) {
            var html = template('tmp', res);
            var links = $('.links');
            links.html(html);
            
            if(res.rows){
                $('.links a').eq(0).trigger("click");
                var id = res.rows[0].id;
                category_second(id);
            }
        }
    })
    // 点击分类左侧获取id 请求分类右侧数据
    $('.links').on('click', 'a', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var id = $(this).attr('data-id');
        category_second(id);
    })
    // 二级分类ajax请求数据
    function category_second(id){
        $.ajax({
            url: "/category/querySecondCategory",
            type: "get",
            data: {
                "id": id
            },
            success: function (res) {
                console.log(res);
                var html = template('tmpl', res);
                $('.brand_list').html(html);
            }
        })
    }
})