var CONTEXT_MENU_CONTENTS = {
  forSelection: [
    'Save As Flashcard'
  ]
};

function setUpContextMenus() {
  CONTEXT_MENU_CONTENTS.forSelection.forEach(function (commandId) {
    chrome.contextMenus.create({
      type: "normal",
      title: commandId + ' "%s"',
      id: 'flashCard',
      contexts: ['selection'],
      onclick: function (info, tab) {
        var pageUrl = info.pageUrl;
        var answer = info.selectionText;
        var baseUrl = "https://learnawesome.org/flash_cards/new?";
        var question = '';
        chrome.tabs.executeScript({
          code: "window.getSelection().anchorNode.wholeText;"
        }, function (selection) {
          question = selection;
          var targetUrl = `${baseUrl}answer=${answer}&question=${question}&url=${pageUrl}`;
          chrome.tabs.create({ url: targetUrl });
        });
      }
    });
  });
}

setUpContextMenus();