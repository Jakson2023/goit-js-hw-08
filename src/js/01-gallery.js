// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// Change code below this line

const ulGallery = document.querySelector(".gallery");

function createMarkup(arr) {
    return arr
        .map(
            ({ preview, original, description }) => `
            <li class="gallery__item">
            <a class="gallery__link" href="${original}" >
               <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"  />
            </a>
            </li>`
        )
        .join("");
}

ulGallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
ulGallery.style.listStyle = "none";


let gallery = new SimpleLightbox(".gallery a", { captionDelay: 250 });
gallery.on("show.simplelightbox", function () {});



