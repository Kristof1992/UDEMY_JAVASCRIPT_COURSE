'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const apiKEY = '120913005179072658899x34721';

// *********************
// ***** Functions *****
// *********************
/**
 *
 * @param {error message} msg
 */
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

/**
 *
 * @param {country object} data
 * @param {css className} className
 */
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
  // countriesContainer.style.opacity = 1;
};

/**
 * fetches url
 * .then() processes Response in JSON format and generates Error along with it.
 * @param {url to fetch} url
 * @param {generated errorMsg} errorMsg
 * @returns Promise<any>
 */
// prettier-ignore
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url)
//   .then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// Promises + Error Handling
// const getCountryPromiseOld = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       console.log();
//       const neighbour = data[0].borders?.[0];
//       // data[0].borders?.[0]
//       if (!neighbour) return;
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0], 'neighbour');
//     })
//     .catch(err => {
//       renderError(`Something went wrong 💥💥💥${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// Promises + Error Handling + Code Reuse
// prettier-ignore
// const getCountryPromise = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       // throw immediately returns the function, checks if a country has a neighbour
//       if (!neighbour)throw new Error(`No neighbour found for (${country.charAt(0).toUpperCase()}${country.slice(1)})`);
//       // Country 2
//       return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`,'Country not found');
//     })
//     .then(data => {
//       renderCountry(data[0], 'neighbour');
//     })
//     .catch(err => {
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryPromise('australia');

const getMyJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

// Coding Challenge 1
// prettier-ignore
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKEY}`)
    .then(response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(data => {
      const { city, country } = data;
      if (!city || !country) { 
        throw new Error(`${data.error.code} ${data.error.message} Requests:${data.error.requests}`);
      }
      return getMyJSON(`https://restcountries.com/v3.1/name/${country.toLowerCase()}`, 'Country not found');
    })
    .then(data => {
      if(!data) throw new Error(`Illegal data received.`);
      renderCountry(data[0]);
      // const neighbour = data[0].borders?.[0];
      // return getMyJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found');
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

// whereAmI(48.19435032420028, 19.97811177894235);
// whereAmI(35.79087981105697, 137.93939292863791);
// setTimeout(() => whereAmI(46.5904726988653, 2.2933991776731197), 2000);

// setTimeout(() => whereAmI(51.99966780892655, 5.391543548307058), 1000);
btn.addEventListener('click', function () {
  setTimeout(() => whereAmI(-33.933, 18.474), 1000);
  setTimeout(() => whereAmI(52.508, 13.381), 5000);
  setTimeout(() => whereAmI(19.037, 72.873), 3000);
});
