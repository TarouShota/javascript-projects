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



/*Fetching the gif from giphy api on and setting the searched value to empty*/


searchBtn.addEventListener("click", () => {
    fetchGif(searchValue.value);
    searchValue.value = ''
});



/* This is setting the style of the input element. */


searchValue.setAttribute(
    "style",
    "color:white; background:black; width:10rem; height:3rem"
);

img.setAttribute(
    'style', 'height:40vh;widht:100vw'
);


/* Fetching a gif from the Giphy API and setting the src attribute of an image element to the URL of
the gif. */

async function fetchGif(toSearch = 'dog') {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=dug0j2a4gXaxE7Rid0exPLjC5GLJxVTL&s=${toSearch}`, { mode: 'cors' })
    const catData = await response.json();
    try {
        img.src = catData.data.images.original.url;
    } catch {
        console.log('smily face:)');
    }
}

fetchGif();

testCunt = () => {
    window.test = 1;
}
testCunt();

console.log(test + 1);