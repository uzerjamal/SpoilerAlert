chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({hideSpoilers: true}, () => {
        console.log('Spoiler Alert enabled!');
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    if (changeInfo.status == 'complete' && tab.active) {
        console.log('test');
    }
})


chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostContains: '.'}
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});