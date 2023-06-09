import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryList = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </li>`
).join("");

gallery.insertAdjacentHTML("beforeend", galleryList);
console.log (galleryList);

gallery.addEventListener ("click", onClickModal);

function onClickModal(evt){
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
		return
	}
    // let selectedImage = evt.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`, {onShow: (instance) => {gallery.addEventListener("keydown", onCloseModal)},
onClose: (instance) => {gallery.removeEventListener("keydown", onCloseModal)
}})
instance.show()

function onCloseModal(evt) {
    if (evt.key === "Escape") {
        instance.close()
    }   
}
}
