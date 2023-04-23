import './style.css';

//Capturar elementos
const btnDog = document.getElementById('dog');
const btnCat = document.getElementById('cat');
const image = document.getElementById('image');
const imageDiv = document.getElementById('image-div')

//URLs
const urlDog = 'https://dog.ceo/api/breeds/image/random';
const urlCat = 'https://api.thecatapi.com/v1/images/search';

//Event Listeners
btnDog.addEventListener('click', () => {
    fetch(urlDog)
    .then(response => response.json())
    .then(data => {
        image.src = data.message;
        image.addEventListener('load', () => {
            imageDiv.style.width = `${image.clientWidth}px`;
        });
    })
    .catch(error => console.log(error.message))
});

btnCat.addEventListener('click', ()=> {
    fetch(urlCat)
        .then(response => response.json())
        .then(data => {
            const urlImage = data[0].url;
            imageDiv.style.width = `${data[0].width}px`;
            image.src = urlImage;
        })
        .catch(error => console.log(error.message));
});