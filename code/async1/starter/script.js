'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

function renderCountry(data, classNeighbour = '') {
  const lang = Object.values(data.languages);
  const cur = Object.values(data.currencies)[0].name;

  // console.log(data);

  const html = `
    <article class="country ${classNeighbour}">
    <img class="country__img" src=${data.flags.svg} />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${lang}</p>
      <p class="country__row"><span>💰</span>${cur}</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}
/*

function getCountryAndNeighbor(countrie) {
  // AJAX Call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${countrie}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);

    // Get Neigbour country
    const neighbour = data.borders?.[0];

    if (!neighbour) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);

      renderCountry(data2, 'neighbour');
    });
  });
}

getCountryAndNeighbor('indonesia');

const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/${countrie}`);
request.send();
*/

// Promise and fetch API

/*
1. Get Pending after storing fetch
2. if [[PromiseState]]: fulfilled, fetch success.
*/

const request = fetch(`https://restcountries.com/v3.1/name/indonesia`); // promise <Pending>

// console.log(request);

function getCountryAndNeighbor(country) {
  const country1 = fetch(`https://restcountries.com/v3.1/name/${country}`);

  country1
    .then(response => response.json()) // .json() is also async
    .then(data => {
      renderCountry(data[0]);

      // Rendering neighbour inside then
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Rendering country 2
      const country2 = fetch(
        `https://restcountries.com/v3.1/alpha/${neighbour}`
      );

      // Always return and handling outside
      return country2;
    })
    .then(response => response.json()) // still returning promises
    .then(data => {
      // console.log(data);
      renderCountry(data[0], 'neighbour');
    });
}

getCountryAndNeighbor('sweden');
