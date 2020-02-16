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
        var params = {
          pageUrl: info.pageUrl,
          answer: info.selectionText
        };
        chrome.tabs.executeScript({
          code: 'var params = ' + JSON.stringify(params)
        }, function () {
          chrome.tabs.executeScript({ file: 'callAPI.js' })
        });
      }
    });
  });
}

setUpContextMenus();