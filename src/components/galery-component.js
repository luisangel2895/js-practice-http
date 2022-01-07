import { uploadImage } from "../services/cloudinary-service";
const $appContainer = document.querySelector("#app3");
let $inputFile, $containerImages;

const createInputHTML = () => {
  const html = `<h1 class="my-5">Upload Images</h1>
    <label for="uploadImage">Select your Image:</label>
    <input type="file" id="uploadImage" accept="image/png, image/jpeg, image/gif, image/ico, image/jpg" multiple="multiple"/>
    <div class="container my-5 galery">
        
    </div>`;
  const $divContainer = document.createElement("div");
  $divContainer.innerHTML = html;
  $appContainer.append($divContainer);

  $inputFile = document.querySelector("input");
};

const createImageHtml = (url) => {
  const html = `<img src="${url}" alt="landscape" id="imageUpload" class="img-thumbnail" />`;
  const $divImage = document.createElement("div");
  $divImage.innerHTML = html;
  $containerImages = document.querySelector(".galery");
  $containerImages.appendChild($divImage);
};

const events = () => {
  $inputFile.addEventListener("change", (event) => {
    const images = event.target.files;
    for (const image of images) {
      uploadImage(image).then(createImageHtml);
    }
  });
};

export const init = () => {
  createInputHTML();
  events();
};
