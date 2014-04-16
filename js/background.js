chrome.contextMenus.create({
  'title': 'Get Metadata',
  'contexts': ['link'],
  'onclick': onClickHandler
});

function onClickHandler(info) {
  var details = {}

  details.title = info.selectionText;
  details.url = info.linkUrl;
  details.editable = info.editable;
  details.id = info.menuItemId;
  details.pageUrl = info.pageUrl;
  details.text = info.selectionText;

  chrome.windows.create({ url: 'window.html', type: 'popup', width: 300, height: 200 }, function() {
    chrome.runtime.sendMessage({ details: details }, function(response) {});
  });
}
