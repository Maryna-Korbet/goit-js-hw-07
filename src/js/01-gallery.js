import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery'); 
    
galleryContainer.insertAdjacentHTML('beforeend', makeListItems(galleryItems));
galleryContainer.addEventListener('click', onImageClick);


function makeListItems(images) {
    return images.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                    <a class="gallery__link"
                        href=${original}>
                            <img class="gallery__image"
                            src=${preview}
                            data-source=${original}
                            alt=${description} 
                            />
                    </a>
                </div>`
    })
        .join("");
}

function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    openModalWindow(event);
}

function openModalWindow(event) {   
    const bigImageURL = event.target.dataset.source;
    const modal = basicLightbox.create(`
    <img src="${bigImageURL}" width="800" height="600">`);
    modal.show(); 

    window.addEventListener('keydown', event => {
        if (event.code !== 'Escape') {
            return;
        }
        modal.close();
    });
}