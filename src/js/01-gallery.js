// 1. Creating and rendering markup from the galleryItems data array and provided gallery item template.
// 2. Implementing delegation to div.gallery and getting the url of a large image.
// 3. Adding the script and styles of the modal window library basicLightbox. Use the jsdelivrCDN service and add links to minified (.min) library files to your project.
// 4. Opening a modal window by clicking on a gallery item. To do this, check out the documentation and examples.
// 5. Replacing the value of the src attribute of the <img> element in a modal window before opening. Use the ready-made modal window markup with the image from the examples of the basicLightbox library.
// 6. Add modal window closing upon pressing the Escape key. Make keyboard listening available only while the modal window is open. In the basicLightbox library, there is a method to close the modal window programmatically.

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