var la_baseUrl = "https://learnawesome.org/flash_cards/new?";

var la_selectedValue = window.getSelection().anchorNode.wholeText;
var la_parentSelection = '';

if (window.getSelection()
  && window.getSelection().getRangeAt(0)
  && window.getSelection().getRangeAt(0).startContainer
  && window.getSelection().getRangeAt(0).startContainer.parentNode
  && window.getSelection().getRangeAt(0).startContainer.parentNode.previousSibling
  && window.getSelection().getRangeAt(0).startContainer.parentNode.previousSibling.innerText) {
  la_parentSelection = window.getSelection().getRangeAt(0).startContainer.parentNode.previousSibling.innerText;
}

if (la_parentSelection) {
  la_params.question = la_parentSelection + ' ' + la_selectedValue;
} else {
  la_params.question = la_selectedValue;
}

var la_queryString = Object.keys(la_params).map((key) => {
  return encodeURIComponent(key) + '=' + encodeURIComponent(la_params[key])
}).join('&');
var la_targetUrl = `${la_baseUrl}${la_queryString}`;

// open this URL in a new tab

browser.runtime.sendMessage({url: la_targetUrl}, function (response) {
  console.log(response.farewell);
});