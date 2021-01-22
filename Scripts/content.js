const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, span, a, p, li, img');
let keywords = ['the walking dead', 'walking dead', 'TWD'];

const checkKeywords = (str) => {
    for (let i=0; i<keywords.length; i++){
        if(str.includes(keywords[i])) return true;
    }
    return false;
}

for(let i=0; i<elements.length; i++){
    if(elements[i].nodeName === 'IMG'){
        if(checkKeywords(elements[i].alt))
            elements[i].setAttribute('style', '-webkit-filter: blur(5px)');
    }
    else {
        if(checkKeywords(elements[i].innerText.toLowerCase())){
            elements[i].setAttribute('style', '-webkit-filter: blur(5px)');
        }
    }

}


//const win = window.onload = () => {
//    let comic = $(`:contains("comic"):not(:has(:contains("comic")))`);
//    comic.css( "text-decoration", "underline" )
//}