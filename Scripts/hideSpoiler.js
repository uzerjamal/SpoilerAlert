chrome.tabs.onUpdated.addListener(()=>{
    console.log('UPDATED');
})



    chrome.tabs.query({active: true, currentWindow: true}, (tabs) =>{
        chrome.tabs.executeScript(
            tabs.id,
            {code: 'document.body.style.backgroundColor = "red";'}
        );
    });
