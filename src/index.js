console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function () {
    fetch(imgUrl).then(function (response) {
        return response.json().then(function (json) {
            addImage(json);
        });
    });
    
    fetch(breedUrl).then(function (response) {
        return response.json().then(function (json) {
            addBreed(json);
        });
    });

    const dogBreedContainer = document.querySelector("#dog-breeds");
    dogBreedContainer.addEventListener("click", function(event) {
        event.target.style.color = "#CF4D6F";
    });
    
    const breedDropdown = document.querySelector("#breed-dropdown");
    breedDropdown.addEventListener("change", function(event) {
        let letterSelect = event.target.value;
        let allBreeds = document.querySelectorAll("#dog-breeds li");
        allBreeds.forEach( breed => {
            if (breed.textContent.charAt(0) != letterSelect) {
                breed.style.visibility = "hidden";
            }
            else {
                breed.style.visibility = "";
            }
        });
    });
});


function addImage(json) {
    const imageContainer = document.querySelector("#dog-image-container");
    json.message.forEach(image => {
        const imageElement = document.createElement("img");
        imageContainer.appendChild(imageElement).src = image;
    });
}

function addBreed(json) {
    const breedContainer = document.querySelector("#dog-breeds");
    Object.keys(json.message).forEach(breed => {
        const breedElement = document.createElement("li");
        breedContainer.appendChild(breedElement).innerText = breed;
    });
}