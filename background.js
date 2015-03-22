chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "http://chrisvalleskey.com/fillerama/";
    chrome.tabs.create({ url: newURL });
});