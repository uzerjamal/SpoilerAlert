const apiKey = '96599eda9024c9c8ccf18ccdd4488bfe' //TMDB api key
const resultList = document.getElementById('list');
const pendingListItem = document.getElementById('pending');

const displayResults = (resultsArray) => {
    for(let i=0; i<4; i++){
        document.getElementById(`img${i+1}`).src = resultsArray[i].posterPath;
        document.getElementById(`title${i+1}`).innerHTML = resultsArray[i].title;
    }
    document.getElementById('content-area-id').style.display = 'block';
}

const getTitles = (title) => {
    let titlesArray = [];
    const queryUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}`+
                        `&query=${title.replace(' ', '+')}&page=1`;
    fetch(queryUrl)
        .then(response => response.json())
        .then(data => {
            pendingListItem.style.display = 'none';
            for(let i=0; i<4; i++){
                titlesArray[i]= {
                    'id': data.results[i].id,
                    'mediaType': data.results[i].media_type,
                    'posterPath': 'http://image.tmdb.org/t/p/w92' + data.results[i].poster_path,
                };
                if(titlesArray[i].mediaType === 'movie'){
                    titlesArray[i].title = data.results[i].title;
                    titlesArray[i].releaseDate = data.results[i].release_date;
                } else if (titlesArray[i].mediaType === 'tv'){
                    titlesArray[i].title = data.results[i].name;
                    titlesArray[i].releaseDate = data.results[i].first_air_date;
                }
            }
            //console.log(titlesArray);
            displayResults(titlesArray);
        });
    pendingListItem.style.display = 'block'; //executes when promise is pending
}

document.getElementById('submitButton').onclick = () => {
    let input = document.getElementById('textInput').value;

    if(input){
        getTitles(input);
    }
    else{
        console.log('ENTER SOMETHING');
    }
};