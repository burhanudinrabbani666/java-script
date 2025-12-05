'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
const renderCountry = (data, className = '') => {
  const langu = Object.values(data.languages)[0];
  const currencie = Object.values(data.currencies)[0].name;
  // console.log(langu);

  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span> ${langu}</p>
        <p class="country__row"><span>💰</span>${currencie}</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = `1`;
};

const renderError = message => {
  // DOM text only
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = `1`;
};

const getJSON = (url, errorMessage = 'Something went wrong') => {
  // make more meaningable with storing to variable
  return fetch(url).then(respons => {
    //Creating new Error
    if (!respons.ok) {
      throw new Error(`${errorMessage}: (${respons.status}).`);
    }

    return respons.json();
  });
};

/*
const getCountryAndNeighbour = country => {
  // Ajax Call 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    // Render country (1)
    renderCountry(data);

    // Get Neighbour country (2)
    const neighbour = data.borders?.[0];

    // AJAX call country (2)
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    }); // <-- This becoming Callback Hell
  }); // <-- This becoming Callback Hell
};

getCountryAndNeighbour('spain');

*/

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

/*
// Fetch
const countryData = function (country) {
  // Fetch Country (1)
  // make more meaningable with storing to variable
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`);

  // method
  request
    .then(respons => {
      //Creating new Error
      if (!respons.ok) {
        throw new Error(`Country Not Found (${respons.status}).`);
      }

      return respons.json();
    }) // json return promise
    .then(data => {
      renderCountry(data[0]);

      // Get neighbour data
      const neighbour = data[0].borders?.[0];

      // Fetch Country (2)
      const request2 = fetch(
        `https://restcountries.com/v3.1/alpha/${neighbour}`
      );

      return request2;
    })
    .then(respons2 => respons2.json()) // promise request2
    .then(data2 => renderCountry(data2[0], 'neighbour'))
    .catch(error => {
      // render any error ✔️
      console.error(`💥 ${error.message}`);
      renderError(`⚠️ Something went wrong: ${error.message} Try Again!`);
    });
};
*/

// Fetch
const countryData = function (country) {
  // Fetch Country (1)
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country Not Found')
    .then(data => {
      renderCountry(data[0]);
      console.log(data[0]);
      // Get neighbour data
      let neighbour;

      if (!data[0].borders) {
        throw new Error('No Neighbour for this Country.');
      } else {
        neighbour = data[0].borders[0];
      }

      // Fetch Country (2)
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country Not Found'
      );
    })
    .then(data2 => {
      renderCountry(data2[0], 'neighbour');
    })
    .catch(error => {
      // render any error ✔️
      console.error(`💥 ${error.message}`);
      renderError(`${error.message} Try Again!`);
    });
};

btn.addEventListener('click', function () {
  countryData('australia');
});

// countryData('bbbb');
