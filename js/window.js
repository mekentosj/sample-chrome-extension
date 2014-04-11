chrome.runtime.onMessage.addListener(
  function(req, sender, sendResponse) {
  if (req.details) {
    var details = req.details;
    $('input[name="title"]').val(details.title);
    $('input[name="url"]').val(details.url);
    $('input[name="page_url"]').val(details.pageUrl);
    $('input[name="id"]').val(details.id);
    $('input[name="anchor"]').val(details.text);
    $('input[name="editable"]').val(details.editable);
  }
});