console.log('JS OK')

// *PHASE 1
// Link to DOM Element
const prevDown = document.querySelector('.fa-circle-down');
const nextUp = document.querySelector('.fa-circle-up');
const imgBox = document.querySelector('.images');

// Link to Thumbnails
const thumbnails = document.querySelectorAll('.thumbnails img');
console.log(thumbnails);

// Create array with images
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// Created image active variable
let activeImage = '';
let activeThumbnails = '';


// *PHASE 2
// Prepare html injection string
for (let i = 0; i < sources.length; i++) {
    activeImage += `<img src="${sources[i]}" alt="">`;
}

// Add HTML elements in DOM
imgBox.innerHTML = activeImage;

const images = document.querySelectorAll('.images img');

// Create index variable
let index = 0;

// console.log(images);
images[index].classList.add('active');


// Button prevDown click
prevDown.addEventListener('click', function () {
    images[index].classList.remove('active');

    //Remove  brightness filter
    thumbnails[index].classList.remove('thumb-active');
    thumbnails[index].classList.add('inactive');
    index++;

    // Infinite prevDown click
    if (index === images.length) {
        index = 0;
    }

    // Add brightness filter
    thumbnails[index].classList.remove('inactive');

    // Add class active in next card
    images[index].classList.add('active');
    thumbnails[index].classList.add('thumb-active');
})

// Button nextUp click
nextUp.addEventListener('click', function () {

    // Remove active class
    images[index].classList.remove('active');
    thumbnails[index].classList.remove('thumb-active');
    thumbnails[index].classList.add('inactive');

    // Infinite nextUp click
    if (index === 0) {
        index = images.length;
    }
    index--;
    thumbnails[index].classList.remove('inactive');


    // Add class active in previous card
    images[index].classList.add('active');
    thumbnails[index].classList.add('thumb-active');

})

console.log('Vue OK', Vue);
