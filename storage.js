chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  var userToken =  localStorage.getItem('ember_simple_auth:session');
  if( request.message === "clicked_browser_action") {
    console.log("clicked_browser_action");
    if(sender !== undefined){
    chrome.runtime.sendMessage({
             method: "POST",
             action: "xhttp",
             url: "https://learnawesome.org/add_or_search",
             data: sender,
             token: userToken.match(/(?:"token":")(\w+)(?:","email")/)[1]
         }, function(responseText) {
             console.log(responseText);
      });
    } else {
      alert("the url you tried to save was invalid, please try again.");
    }
   }

});