let searchForm = document.createElement("form");
const searchValue = document.createElement('input');
const searchBtn = document.createElement("input");

const img = document.querySelector('img');



searchBtn.setAttribute("type", "submit");
searchBtn.textContent = "Search";


searchBtn.addEventListener("click", () => {
    showGif(searchValue.value);
    searchValue.value = ''
});
searchForm.appendChild(searchValue);
document.body.append(searchBtn, searchForm);



searchValue.setAttribute(
    "style",
    "color:white; background:black; width:10rem; height:3rem"
);
searchValue.setAttribute('type', 'text');
/* Fetching a gif from the Giphy API and setting the src attribute of an image element to the URL of
the gif. */
showGif = (toSearch) => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=dug0j2a4gXaxE7Rid0exPLjC5GLJxVTL&s=${toSearch}`, { mode: 'cors' })
        .then(function (response) {
            console.log(response);
            return (response.json());

        })
        .then(function (response) {
            console.log(response)
            if (response.data.length != 0) {
                console.log('its ok')
                img.src = response.data.images.original.url;

            } else {
                img.src = 'https://blog.cdn.own3d.tv/resize=fit:crop,height:400,width:600/xinJss8TDnfdLunn6mfA'
                console.log('u are doing great, keep going, my man');

            }

        });
}

showGif();

testFunc = () => {
    window.test = 1;
}
testFunc();

console.log(test + 1);