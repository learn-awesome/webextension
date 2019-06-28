chrome.tabs.query({active:true,currentWindow:true},function(tabArray){
	console.log("in popup.js ...");
    console.log(tabArray[0].url);
    var url = "http://localhost:3000/items/search?utf8=✓&q=https%3A%2F%2Fdeveloper.mozilla.org%2F&commit=Search+or+Add";
    document.getElementById('laiframe').src = url;
});