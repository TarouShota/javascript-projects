/* Creating a form element and setting the type of the submit button to submit. */
let button;
let body = document.querySelector('body');
let searchValue = document.createElement('input');

Window.searchForm = document.createElement("form");

button = document.createElement("input");

button.setAttribute("type", "submit");
searchValue.setAttribute('type', 'text');


Window.searchForm.append(searchValue);
body.append(Window.searchForm, button);


const img = document.querySelector('img');


img.setAttribute(
    'style', 'height:40vh;widht:100vw'
);
console.log(button);

/*Fetching the gif from giphy api on and setting the searched value to empty*/


button.addEventListener("click", () => {
    showWeather(searchValue.value);
    //searchValue.value = ''
});



/* Fetching a gif from the Giphy API and setting the src attribute of an image element to the URL of
the gif. */

async function fetchGif(toSearch = 'dog') {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=dug0j2a4gXaxE7Rid0exPLjC5GLJxVTL&s=${toSearch}`, { mode: 'cors' })
    const searchResult = await response.json();

    try {

        img.src = searchResult.data.images.original.url;
        console.log(img)
    } catch {
        console.log('smily face:)');
    }
};

/* Fetching the weather data from the OpenWeatherMap API. */
async function showWeather(toSearch) {
    /* The image is being set to the URL of the weather icon. */
    img.src = `https://avatars.githubusercontent.com/u/46716452?v=4`;
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${toSearch}&limit=&appid=4e933858aef6891926f4927f0068c206`, { mode: 'cors' })
    const coordinates = await response.json();
    const [lon, lat] = [coordinates[0].lon, coordinates[0].lat];


    /* Fetching the weather data from the OpenWeatherMap API. */
    const weatherFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4e933858aef6891926f4927f0068c206`, { mode: 'cors' })
    const weatherData = await weatherFetch.json();
    console.log(weatherData);
    const weatherIcon = weatherData.weather[0].icon


    /* A try catch block. */
    try {
        /* Setting the src attribute of the image element to the URL of the weather icon. */

        img.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    } catch (error) {
        console.log(error);
    }
};

fetchGif()

//  createSearchForm }


