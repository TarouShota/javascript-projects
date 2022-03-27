/* Creating a form element and setting the type of the submit button to submit. */
let createSearchForm = function (appendIn = document.body, btnValue = 'search') {
    window.searchForm = document.createElement("form");
    window.searchValue = document.createElement('input');
    window.searchBtn = document.createElement("input");

    searchBtn.setAttribute("type", "submit");
    searchValue.setAttribute('type', 'text');

    searchBtn.value = btnValue;

    searchForm.append(searchValue);
    appendIn.append(searchForm, searchBtn);

}
createSearchForm(document.body, 'eat it');
const img = document.querySelector('img');

let styleForms = () => {
    searchValue.setAttribute(
        "style",
        "color:white; background:black; width:10rem; height:3rem"
    );

    img.setAttribute(
        'style', 'height:40vh;widht:100vw'
    );
}
styleForms();

/*Fetching the gif from giphy api on and setting the searched value to empty*/


searchBtn.addEventListener("click", () => {
    showWeather(searchValue.value);
    //searchValue.value = ''
});



/* Fetching a gif from the Giphy API and setting the src attribute of an image element to the URL of
the gif. */

async function fetchGif(toSearch = 'dog') {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=dug0j2a4gXaxE7Rid0exPLjC5GLJxVTL&s=${toSearch}`, { mode: 'cors' })
    const catData = await response.json();
    try {
        img.src = catData.data.images.original.url;
        console.log(catData)
    } catch {
        console.log('smily face:)');
    }
}
async function showWeather(toSearch) {
    img.src = `https://avatars.githubusercontent.com/u/46716452?v=4`;
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${toSearch}&limit=&appid=4e933858aef6891926f4927f0068c206`, { mode: 'cors' })
    const coordinates = await response.json();
    const [lon, lat] = [coordinates[0].lon, coordinates[0].lat];

    const weatherFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4e933858aef6891926f4927f0068c206`, { mode: 'cors' })
    const weatherData = await weatherFetch.json();
    const weatherIcon = weatherData.weather[0].icon


    try {
        img.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
        console.log(coordinates);
        console.log(weatherData);
        console.log(weatherData.weather[0].icon)
    } catch (error) {
        console.log(error);
    }
}

//fetchGif();


