chrome.browserAction.onClicked.addListener(function(tab){ 
  chrome.tabs.query(
  	{active: true, currentWindow: true},
  	function(tabs){
		var activeTab = tabs[0];

		chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"}, function(response){
		  var lastError = chrome.runtime.lastError;
		    if(lastError){
		      console.log(lastError.message);
		    } else {
		      console.log(response);
		  }
		});
  	}
  );
});

chrome.runtime.onInstalled.addListener(function() {
	console.log("installation done...")
});