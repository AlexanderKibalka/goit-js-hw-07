import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");

container.insertAdjacentHTML('afterbegin', createMarcup(galleryItems));
container.addEventListener('click', hendlerClick);

function createMarcup(arr) {
    
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
    `).join('');
};

function hendlerClick(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) {
        return
    } 
    
const currentGallery = evt.target.closest('.gallery__link');
    
const galleryDescription = currentGallery.innerHTML;
    
const picture = galleryItems.find(({ description }) => galleryDescription.includes(description));

    const instance = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt'
});
    


};

