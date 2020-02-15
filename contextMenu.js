var CONTEXT_MENU_CONTENTS = {
  forSelection: [
    'Save As Flashcard'
  ]
};

function setUpContextMenus() {
  CONTEXT_MENU_CONTENTS.forSelection.forEach(function (commandId) {
    chrome.contextMenus.create({
      type: "separator",
      id: 'flashCardSeparator',
      contexts: ['selection']
    });
    chrome.contextMenus.create({
      title: commandId,
      id: commandId,
      contexts: ['selection']
    });
  });
}

setUpContextMenus();