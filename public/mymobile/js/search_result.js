var sendURL = location.href;
var proName = getSendData(sendURL);
var page = 1;
var pageSize = 3;
var This = null;
var price = 1;
var num = 1;
var html = "";
var This = null;
$(function () {

	// 上拉刷新加载页面
	mui.init({
		pullRefresh: {
			container: document.querySelector('#refreshContainer'), //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
			up: {
				height: 50, //可选.默认50.触发上拉加载拖动距离
				auto: true, //可选,默认false.自动上拉加载一次
				contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
				contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
				callback: getData
			}
		}
	});
	console.log(page);
	$('.price').on('tap', function () {
		price = price == 1 ? 2 : 1;
		html = "";
		page = 1;
		getData();
		mui('#refreshContainer').pullRefresh().refresh(true);
	})
	$('.sales').on('tap', function () {
		price = price == 1 ? 2 : 1;
		html = "";
		page = 1;
		getData();
		mui('#refreshContainer').pullRefresh().refresh(true);
	})
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

function getData() {
	if (!This) {
		This = this;
	}
	$.ajax({
		url: "/product/queryProduct",
		type: 'get',
		data: {
			page: page++,
			pageSize: pageSize,
			proName: proName,
			price: price,
			num: num
		},
		success: function (res) {
			console.log(res);
			if (res.data.length > 0) {
				html += template('tmp', res);
				$('#productBox').html(html);
				This.endPullupToRefresh(false);
			} else {
				This.endPullupToRefresh(true);
			}
		}
	})
}