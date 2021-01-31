const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, span, a, p, li, img');
let keywords = [];

const checkKeywords = (str) => {
    for (let i=0; i<keywords.length; i++){
        for(let j=0;j<keywords[i].length; j++){
            if(str.includes(keywords[i][j].toLowerCase())) return true;
        }
    }
    return false;
}

chrome.storage.sync.get('keywordList', (result)=>{
    keywords = result.keywordList;

    for(let i=0; i<elements.length; i++){
        if(elements[i].nodeName === 'IMG'){
            if(checkKeywords((elements[i].alt).toLowerCase()))
                elements[i].setAttribute('style', '-webkit-filter: blur(5px)');
        }
        else {
            if(checkKeywords(elements[i].innerText.toLowerCase())){
                elements[i].setAttribute('style', '-webkit-filter: blur(5px)');
            }
        }
    }
});
