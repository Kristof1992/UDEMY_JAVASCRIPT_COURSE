'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// W Promises
const getCountryPromise = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      console.log(neighbour);
      if (!neighbour) return;
      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      renderCountry(data[0], 'neighbour');
    });
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    console.log('Req1 loaded');
    const [data] = JSON.parse(this.responseText);

    // Render country 1
    renderCountry(data);
    // Get neighbour country 2
    const neighbour = data.borders?.[0];
    if (!neighbour) return;
    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    // AJAX call country 2
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      // console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// Function
// prettier-ignore
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1) + 'M'} people</p>
          <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
          <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// getCountryPromise('portugal');

// Render countries recursion
const getCountryData = function (country, neighbour = '', origin = true) {
  fetch(`https://restcountries.com/v3.1/alpha/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0], neighbour);
      if (!data[0].borders || origin === false) {
        return;
      }
      data[0].borders.forEach(country => {
        getCountryData(country, 'neighbour', false);
      });
    });
};

// Render countries loop
const getCountryDataLoop = function (country, neighbour = '', origin = true) {
  fetch(`https://restcountries.com/v3.1/alpha/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0], neighbour);
      data[0].borders.forEach(country => {
        fetch(`https://restcountries.com/v3.1/alpha/${country}`)
          .then(response => response.json())
          .then(data => {
            renderCountry(data[0], 'neighbour');
          });
      });
    });
};

getCountryDataLoop('fin');
