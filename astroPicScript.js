const key = "51NnElvD7otkbTJJcoFUFSLQz2xVQKLAh5uh2fPm";
const standardString = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
var searchString = standardString;
const dateBox = document.getElementById("date-selector");
var date = "";

// Example url for adding parameters: https://api.nasa.gov/planetary/apod?api_key=${key}&date=2021-05-02
//Add parameters with &, strings do not need quotes

const pageImage = document.getElementById("APOD-Image");
const descriptionBox = document.getElementById("description");
const titleBox = document.getElementById("image-title");

function APODfetch() {
  fetch(searchString)
    .then((response) => response.json())
    .then((data) =>  APODshow(data))
    .catch(function() {
      console.log("Error occurred");
    });
}


function APODshow(data) {
  pageImage.src = data.url;
  descriptionBox.innerHTML = data.explanation;
  titleBox.innerHTML = data.title;
  
}

function update() {
  date = dateBox.value;
  console.log(date);
  searchString = standardString + `&date=${date}`;
}


document.getElementById("fetchButton").addEventListener("click", APODfetch);

document.getElementById("date-selector").addEventListener("change", update);
