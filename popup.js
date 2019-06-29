chrome.tabs.query({active:true,currentWindow:true},function(tabArray){
    //console.log(tabArray[0].url);
    var params = {
    	utf8: '',
    	q: tabArray[0].url,
    	ext: 'true',
    	commit: 'Search or Add'
    }
    var esc = encodeURIComponent;
    var query = Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&');
    var url = "https://learnawesome.org/items/search?" + query;
    document.getElementById('laiframe').src = url;
});