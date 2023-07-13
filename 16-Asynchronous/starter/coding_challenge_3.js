'use strict';

const url1 = 'img/img-1.jpg';
const url2 = 'img/img-2.jpg';
const url3 = 'img/img-3.jpg';
const imgURLS = [url1, url2, url3];

const divImgs = document.querySelector('.images');

let curImgElement = null;

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// Coding Challenge 2
// createImage(url1)
//   .then(img => {
//     curImgElement = img;
//     return wait(2);
//   })
//   .then(() => {
//     curImgElement.style.display = 'none';
//     return createImage(url2);
//   })
//   .then(img => {
//     curImgElement = img;
//     return wait(2);
//   })
//   .then(() => (curImgElement.style.display = 'none'))
//   .catch(e => console.error(e));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

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

// *** Task 1 ***
const loadNPause = async function () {
  let imgHTML = await createImage(url1);
  await wait(2);
  imgHTML.style.display = 'none';

  imgHTML = await createImage(url2);
  await wait(2);
  imgHTML.style.display = 'none';
};
// loadNPause();

// *** Task 2 ***
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => {
      // console.log(imgs); // [Promise, Promise, Promise]
      return await createImage(img);
    });
    const imgElements = await Promise.all(imgs);
    console.log(imgElements);
    imgElements.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(imgURLS);
