var LA_CONTEXT_MENU_CONTENTS = {
  forSelection: [
    'Save as Flashcard on LearnAwesome.org'
  ]
};

function la_setUpContextMenus() {
  LA_CONTEXT_MENU_CONTENTS.forSelection.forEach(function (commandId) {
    chrome.contextMenus.create({
      type: "normal",
      title: commandId,
      id: 'flashCard',
      contexts: ['selection'],
      onclick: function (info, tab) {
        var params = {
          url: info.pageUrl,
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

la_setUpContextMenus();