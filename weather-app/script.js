/* Creating a form element and setting the type of the submit button to submit. */
export function createSearchForm(appendIn = document.body, btnValue = 'search') {
    Window.searchForm = document.createElement("form");
    Window.searchValue = document.createElement('input');
    Window.searchBtn = document.createElement("input");

    Window.searchBtn.setAttribute("type", "submit");
    Window.searchValue.setAttribute('type', 'text');

    Window.searchBtn.value = btnValue;

    Window.searchForm.append(Window.searchValue);
    appendIn.append(Window.searchForm, Window.searchBtn);

}
const img = document.querySelector('img');


// img.setAttribute(
//     'style', 'height:40vh;widht:100vw'
// );


/*Fetching the gif from giphy api on and setting the searched value to empty*/


Window.searchBtn.addEventListener("click", () => {
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
        console.log(searchResult)
    } catch {
        console.log('smily face:)');
    }
}
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
}

// export { createSearchForm }
//fetchGif();


