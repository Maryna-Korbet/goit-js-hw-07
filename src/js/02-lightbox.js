import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', makeListItems(galleryItems));

function makeListItems(images) {
    return images.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                    <a class="gallery__link"
                        href=${original}>
                            <img class="gallery__image"
                            src=${preview}
                            alt=${description} 
                            />
                    </a>
                </div>`
    })
        .join("");
}

var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});


