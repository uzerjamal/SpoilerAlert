const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, span, a, p, li');
let keywords = ['the walking dead', 'walking dead'];

const checkKeywords = (str) => {
    for (let i=0; i<keywords.length; i++){
        if(str.includes(keywords[i])) return true;
    }
    return false;
}

for(let i=0; i<textElements.length; i++){
    if(checkKeywords(textElements[i].innerText.toLowerCase())){
        textElements[i].setAttribute('style', '-webkit-filter: blur(5px)');
    }
}



    // const win = window.onload = () => {
    //     let comic = $(`:contains("comic"):not(:has(:contains("comic")))`);
    //     comic.css( "text-decoration", "underline" )
    // }