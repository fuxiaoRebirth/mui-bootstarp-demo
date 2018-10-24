$(function () {
    
    var searchArr = JSON.parse(localStorage.getItem('historyData'))||[];
    
    $('#search').on('tap', function () {
        var searchData = $(this).siblings().val();
        if(searchData) {
            searchArr.unshift(searchData);
            localStorage.setItem('historyData', JSON.stringify(searchArr));
            location.href = "search_result.html#?searchData=" + searchData;
            $(this).siblings().val('');
        }
    })

    if (localStorage.getItem('historyData')) {
         var data = JSON.parse(localStorage.getItem('historyData'));
        
        var html = template('tmp', {
            datas: data
        });
        $('#historyList').html(html);
    }

   
    $('#clearHistory').on('tap',function(){
        searchArr = [];
        $('#historyList').html('');
        localStorage.removeItem('historyData');
    })
})