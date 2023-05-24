import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
 const gallery = document.querySelector(".gallery")

 const galleryList = galleryItems.map(({preview, original, description})=>
 `<li class="gallery__item">
 <a class="gallery__link" href="${original}">
 <img class="gallery__image" src="${preview}"
 alt="${description}"/>
 </a>
</li>
 `
 ).join("");

 const galleryImg = document.querySelector('.gallery__image')
 gallery.insertAdjacentHTML("beforeend", galleryList)

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});