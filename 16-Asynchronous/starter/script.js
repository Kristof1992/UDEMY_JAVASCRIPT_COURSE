'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// MOUNTAIN

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(data);
    //   const flag = data.flags.png;

    const html = `
      <article class="country">
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

    // Find Slovakia and change border color
    // if (data.name.common === 'Slovakia') {
    //   const elements = document.querySelectorAll('.country__name');
    //   const foundEl = [...elements].find(el => el.textContent === 'Slovakia');
    //   console.log(foundEl);
    //   const parent = foundEl.closest('.country');
    //   console.log(parent);
    //   parent.style.boxShadow = '0 1rem 5rem 1.4rem rgba(0, 119, 210, 1)';
    // }
    countriesContainer.style.opacity = 1;
  });
};

// Callback Hell lecture
// AJAX call country 1
// prettier-ignore
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
      console.log('Req2 loaded');
      const [data2] = JSON.parse(this.responseText);
      // console.log(data2);

      renderCountry(data2, 'neighbour');

      const neighbour = data.borders?.[0];
      if (!neighbour) return;

      const request3 = new XMLHttpRequest();
      request3.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
      request3.send();
      // AJAX call country 3
      request3.addEventListener('load', function () {
        console.log('Req3 loaded');
        const [data3] = JSON.parse(this.responseText);
        // console.log(data2);

        renderCountry(data3, 'neighbour');

        const neighbour = data.borders?.[0];
        if (!neighbour) return;

        const request4 = new XMLHttpRequest();
        request4.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request4.send();

        request4.addEventListener('load', function() {

          console.log('Req4 loaded');
          const [data4] = JSON.parse(this.responseText);
          // console.log(data2);
  
          renderCountry(data4, 'neighbour');
  
          const neighbour = data.borders?.[0];
          if (!neighbour) return;

        })

        
      });

    });
    // Render country 2
    // renderCountry(data);
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

// getCountryAndNeighbour('portugal'); // neighbour Vienna
getCountryAndNeighbour('usa');

// 1st call
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
        setTimeout(() => {
          console.log('5 seconds passed');
        }, 1000); // last call
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
