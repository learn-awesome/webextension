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
  params.question = la_parentSelection + ' ' + la_selectedValue;
} else {
  params.question = la_selectedValue;
}

var la_queryString = Object.keys(params).map((key) => {
  return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
}).join('&');
var la_targetUrl = `${la_baseUrl}${la_queryString}`;

// call the api from new tab
var la_a = document.createElement('a');
la_a.href = la_targetUrl;
la_a.target = "_blank";
la_a.click();