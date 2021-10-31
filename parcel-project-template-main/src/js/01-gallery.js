// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryRef = document.querySelector('.gallery')

const result =  galleryItems.map(({preview,original,description}) => {
 const element =   `<div className="gallery__item">
    <a className="gallery__link" href="${original}">
      <img
        className="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  return element
})

 galleryRef.insertAdjacentHTML("beforeend", result.join(''));

console.log(galleryItems);

new SimpleLightbox('.gallery a');
