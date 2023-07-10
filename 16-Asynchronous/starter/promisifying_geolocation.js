'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const apiKEY = '4ed4cb41df56474ba36e0f70c0fdd8e9';

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
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
  // countriesContainer.style.opacity = 1;
};

const whereAmIcallbacks = function (lat, lng) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKEY}`
  );
  request.send();
  request.addEventListener('load', function () {
    try {
      const response = this.responseText;
      const data = JSON.parse(response);
      const { city, country } = data.features?.[0]?.properties;
      try {
        if (!city || !country)
          throw new TypeError(`City or Country doesn't exist`);
      } catch (e) {
        console.log(e);
      }
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/name/${country}`);
      request2.send();
      request2.addEventListener('load', function () {
        try {
          let response2 = this.responseText;
          // renderError(response2)
          const data = JSON.parse(response2);
          renderCountry(data[0]);
        } catch (e) {
          console.error(e);
        }
      });
    } catch (e) {
      console.error(e);
    }
  });
};

const whereAmI = function (lat, lng) {
  fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKEY}`
  )
    .then(response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(data => {
      const { city, country } = data.features?.[0]?.properties;
      if (!city || !country) {
        throw new Error(
          `${data.error.code} ${data.error.message} Requests:${data.error.requests}`
        );
      }
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
    // .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`Something went wrong 💥${err}. Try again!`);
      renderError(`Something went wrong 💥${err}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
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

btn.addEventListener('click', newWhereAmI);
// whereAmI(48.19392282464782, 19.97692035843254);
