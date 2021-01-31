chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({keywordList: []}, () => {
        console.log('Spoiler Alert enabled!');
    });
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, ()=>{
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostContains: '.'}
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});