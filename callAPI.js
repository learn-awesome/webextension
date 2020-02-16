var baseUrl = "https://learnawesome.org/flash_cards/new?";

var selectedValue = window.getSelection().anchorNode.wholeText;
var parentSelection = window.getSelection().getRangeAt(0).startContainer.parentNode.previousSibling.innerText;

if (parentSelection) {
  params.question = parentSelection + ' ' + selectedValue;
} else {
  params.question = selectedValue;
}

var queryString = Object.keys(params).map((key) => {
  return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
}).join('&');
var targetUrl = `${baseUrl}${queryString}`;

// call the api from new tab
window.open(targetUrl);
