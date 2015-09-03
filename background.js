// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  chrome.bookmarks.getTree(function(data){
    console.log(data);
    chrome.tabs.sendMessage(activeTab.id,{"message": "get_bookmarks"},data);
    });
  });

});