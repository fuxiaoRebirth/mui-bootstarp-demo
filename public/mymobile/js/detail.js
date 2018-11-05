
	$(function(){
		
		let id = getSendData(location.href)
		
		

	});

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