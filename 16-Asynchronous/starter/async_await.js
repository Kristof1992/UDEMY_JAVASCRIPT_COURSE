'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const apiKEY = '4ed4cb41df56474ba36e0f70c0fdd8e9';

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${
              (+data.population / 1000000).toFixed(1) + 'M'
            } people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
        </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const newWhereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKEY}`
      );
    })
    .then(res => res.json())
    .then(data => {
      const { city, country } = data.features?.[0]?.properties;
      return fetch(
        `https://restcountries.com/v3.1/name/${country.toLowerCase()}`
      );
    })
    .then(response => {
      if (!response.ok) throw new Error('Country not found');
      return response.json();
    })
    .then(data => {
      if (!data) throw new Error(`Illegal data received.`);
      renderCountry(data[0]);
    })
    .catch(e => console.error(`${e.message} 💥`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKEY}`
// ***** ASYNC/AWAIT *****
// prettier-ignore
const whereAmI = async function () {
  try {
    const curPosition_GEOLOCATION_API = await getPosition();
    const { latitude: lat, longitude: lng } = curPosition_GEOLOCATION_API.coords;
    const result_GEOAPIFY_API = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKEY}`);
    if(!result_GEOAPIFY_API.ok) throw new Error('Problem getting location data');
    const result_GEOAPIFY_API_JSON = await result_GEOAPIFY_API.json();
    const { city, country } = result_GEOAPIFY_API_JSON.features?.[0]?.properties;
    const result_REST_COUNTRIES_API = await fetch(`https://restcountries.com/v3.1/name/${country}`); // Blocks only in async!
    if(!result_REST_COUNTRIES_API.ok) throw new Error('Problem getting country');
    const result_REST_COUNTRIES_API_JSON = await result_REST_COUNTRIES_API.json();
    renderCountry(result_REST_COUNTRIES_API_JSON[0]);
    return `You are in ${city}, ${country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`Something went wrong 💥 ${err.message}`);
    throw err;
  }
};

// console.log('1: Getting location');
// whereAmI()
// .then(() => console.log(`2: ${city}`))
// .catch((err) => console.error(`2: ${err.message} 💥`))
// .finally(()=> console.log('3: Finished getting location'));

(async function () {
  try {
    console.log('1: Getting location');
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  } finally {
    console.log('3: Finished getting location');
  }
})();
