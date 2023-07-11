'use strict';

// 1. Load image 1
// 2. hide Loaded image 1/load next image
// 3. next image loaded/hide img

// 1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image
// (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM
// element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself.
// In case there is an error loading the image ('error' event), reject the promise.

// const createImage = function (imgPath) {
//   return new Promise(resolve => {
//     const img = document.createElement('img');
//     img.addEventListener('load', () => {
//       resolve(img);
//     });
//     img.src = imgPath;
//   });
// };

// createImage(
//   'D:UDEMY_COURSESUDEMY_JAVASCRIPT_JONAS_SCHEDTMANNcomplete-javascript-course-master\\16-Asynchronousstarterimgimg-1.jpg'
// ).then(x => console.log(x));

// const imageContainer = document.querySelector('.images');
// const img = document.createElement('img');
// imageContainer.insertAdjacentHTML('afterbegin', img);
const url1 = 'img/img-1.jpg';
const url2 = 'img/img-2.jpg';
const url3 = 'img/img-3.jpg';

const divImgs = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// adddImage(url);

const createImage = function (url) {
  return new Promise(function (resolve, reject) {
    // const imgHTML = document.createElement('img');
    // imgHTML.src = url;
    // if (imgHTML.src !== '') resolve(imgHTML);
    // else reject(new Error("Img source couldn't be loaded"));

    const imgHTML = document.createElement('img');
    imgHTML.src = url;
    imgHTML.addEventListener('load', () => {
      divImgs.append(imgHTML);
      resolve(imgHTML);
    });
    imgHTML.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// 1. createImg
// 2. insertImg to DOM
// 3. Wait(seconds) - Promise

let curImgElement = null;

// const img = createImage(url1);
// console.log(img);

// wait(2)
//   .then(() => createImage(url1))

//   .then(imgElement => {
//     console.log('Inserting image 1');
//     divImgs.insertAdjacentElement('beforeend', imgElement);
//     curImgElement = imgElement;
//     return wait(2);
//   })
//   .then(() => {
//     console.log('Hiding image 1');
//     curImgElement.style.display = 'none';
//     return wait(2);
//   })
//   .then(() => createImage(url2))
//   .then(imgElement => {
//     console.log('Inserting image 2');
//     divImgs.insertAdjacentElement('beforeend', imgElement);
//     curImgElement = imgElement;
//     return wait(2);
//   })
//   .then(() => {
//     console.log('Hiding image 2');
//     curImgElement.style.display = 'none';
//   })
//   .catch(e => console.error(e));

createImage(url1)
  .then(img => {
    curImgElement = img;
    return wait(2);
  })
  .then(() => {
    curImgElement.style.display = 'none';
    return createImage(url2);
  })
  .then(img => {
    curImgElement = img;
    return wait(2);
  })
  .then(() => (curImgElement.style.display = 'none'))
  .catch(e => console.error(e));
