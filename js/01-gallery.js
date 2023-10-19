import { galleryItems } from './gallery-items.js';

const container = document.querySelector(".gallery");

container.insertAdjacentHTML('afterbegin', createMarcup(galleryItems));
container.addEventListener('click', hendlerClick);

function createMarcup(arr) {
    
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
     </a>
    </li>
    `).join('');
};

function hendlerClick(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) {
        return
    } 
    
const currentGallery = evt.target.closest('.gallery__item');

const galleryDescription = currentGallery.innerHTML;

const picture = galleryItems.find(({ description }) => galleryDescription.includes(description));

const instance = basicLightbox.create(`
    <div class="modal">
       <img
       class="gallery__image__modal"
       src="${picture.original}"
       alt="${picture.description}"
       width="800"
     />
    </div>
`)

    instance.show()
};






