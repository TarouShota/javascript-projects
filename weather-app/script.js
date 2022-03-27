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



/* Creating a form element and setting the type of the submit button to submit. */


searchBtn.addEventListener("click", () => {
    showGif(searchValue.value);
    searchValue.value = ''
});



/* This is setting the style of the input element. */


searchValue.setAttribute(
    "style",
    "color:white; background:black; width:10rem; height:3rem"
);


/* Fetching a gif from the Giphy API and setting the src attribute of an image element to the URL of
the gif. */

showGif = (toSearch = 'dog') => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=dug0j2a4gXaxE7Rid0exPLjC5GLJxVTL&s=${toSearch}`, { mode: 'cors' })
        .then(function (response) {
            console.log(response);
            return (response.json());

        })
        .then(function (response) {
            try {
                console.log(response)
                img.src = response.data.images.original.url;



            } catch {
                img.src = 'https://blog.cdn.own3d.tv/resize=fit:crop,height:400,width:600/xinJss8TDnfdLunn6mfA'
                console.log('u are doing great, keep going, my man');
            };


        });

}

showGif();

testFunc = () => {
    window.test = 1;
}
testFunc();

console.log(test + 1);