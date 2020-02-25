var LA_CONTEXT_MENU_CONTENTS = {
  forSelection: [
    'Save as flashcard on LearnAwesome.org'
  ]
};

function la_setUpContextMenus() {
  LA_CONTEXT_MENU_CONTENTS.forSelection.forEach(function (commandId) {
    browser.contextMenus.create({
      type: "normal",
      title: commandId,
      id: 'flashCard',
      contexts: ['selection'],
      onclick: function (info, tab) {
        var params = {
          url: info.pageUrl,
          answer: info.selectionText
        };
        browser.tabs.executeScript({
          code: 'var la_params = ' + JSON.stringify(params)
        });
        browser.tabs.executeScript({file: "browser-polyfill.js"});
        browser.tabs.executeScript({ file: 'content-script.js' });
      }
    });
  });
}

function onTabCreated(tab) {
  console.log(`Created new tab: ${tab.id}`)
}

function onTabError(error) {
  console.log(`Error: ${error}`);
}

function receiveMessage(request, sender, sendResponse) {
  console.log(sender.tab ?
          "from a content script:" + sender.tab.url :
          "from the extension");
  console.log(request);
  var creating = browser.tabs.create({url: request.url});
  creating.then(onTabCreated, onTabError);
}

la_setUpContextMenus();

browser.runtime.onMessage.addListener(receiveMessage);
