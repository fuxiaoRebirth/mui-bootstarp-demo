$(function () {
    var isEdi = parseInt(getSendData(location.href));

    if (!isEdi) {
        var html = template('tmp', {});
        $('#addEdi-Box').html(html);
    }
    //点击添加按钮跳转到地址管理页面;
    $('#addAdress').on('tap', function () {
        var recipients = $('[name=recipients]').val();
        var postcode = $.trim($('[name = postcode]').val());
        var address = $.trim($('[name = address]').val());
        var addressDetail = $.trim($('[name = addressDetail]').val());
        if (!recipients) {
            mui.toast('请输入收货人姓名')
            return;
        }
        $.ajax({
            url: "/address/addAddress",
            type: 'post',
            data: {
                address: address,
                addressDetail: addressDetail,
                recipients: recipients,
                postcode: postcode
            },
            success: function (res) {
                if (res.success) {
                    location.href = "address.html";
                }
            }

        })
    })
    //省城市
    $('[name=address]').on('tap', function () {
        console.log(1);
        var picker = new mui.PopPicker({
                layer: 3
            }

        );
        picker.setData(cityData);
        picker.show(function (selectItems) {
            var t1 = selectItems[0].text
            var t2 = selectItems[1].text
            var t3 = selectItems[2].text
            $('[name = address]').val(t1 + t2 + t3);
        })
    })

    if (localStorage.getItem('edi')) {
        if (isEdi) {
            var edi = JSON.parse(localStorage.getItem('edi'));
            console.log(edi);
            var html = template('tmp', edi);
            $('#addEdi-Box').html(html);
        }
    }
})
// 获取url后面跟随的参数
function getSendData(url) {
    var str = location.href;
    var index = str.indexOf('?');
    var searchDatas = str.substr(index + 1);
    var searchs = searchDatas.split('&');
    for (var i = 0; i < searchs.length; i++) {
        var search = searchs[0].split('=');
        var sendData = search[1];
    }
    return sendData;
}