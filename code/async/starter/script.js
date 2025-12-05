'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
const renderCountry = function (data, className = ' ') {
  // console.log(data);

  const langu = Object.values(data.languages);
  const firstLangu = Object.values(langu).slice(0, 1);
  const currencies = Object.values(data.currencies)[0].name;

  const result = langu.length > 1 ? firstLangu : langu;

  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${result}</p>
          <p class="country__row"><span>💰</span>${currencies}</p>
        </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

/*
// OLD school
const getCountryAndNeightbour = function (country) {
  // Ajax country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // call the function
    renderCountry(data);

    // Get neightbour country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // Ajax country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeightbour('indonesia');
*/

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request`.send();

// Using Fetch
const request = fetch(`https://restcountries.com/v3.1/name/palestine`);

// const getCountryData = country => {
// fetch(`https://restcountries.com/v3.1/name/${country}`)
// .then(response => {
// return response.json();
// })
// .then(data => {
// renderCountry(data[0]);
// });
// };

const getJson = (url, errorMsg = 'Something went Wrong') => {
  return fetch(url).then(response => {
    // Error Handling
    if (!response.ok)
      throw new Error(`${errorMsg}Country Not Found (${response.status})`);

    return response.json();
  });
};

/*
const getCountryData = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);

      // Error Handling
      if (!response.ok)
        throw new Error(`Country Not Found (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error(`This Country Don't Have Neighbour`);

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      renderCountry(data[0], 'neighbour');
    })
    .catch(err => {
      // Handling error
      console.error(`${err} 💥💥💥`);
      renderError(`Something is wrong 💥💥💥 ${err.message}. Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
*/

const getCountryData = country => {
  getJson(`https://restcountries.com/v3.1/name/${country}`, `Country Not Found`)
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error(`No Neighbord Found`);

      // Country 2
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Contry Not Found`
      );
    })
    .then(data => {
      renderCountry(data[0], 'neighbour');
      // countriesContainer.style.opacity = 1;
    })
    .catch(err => {
      // Handling error
      console.error(`${err} 💥💥💥`);
      renderError(`Something is wrong 💥💥💥 ${err.message}. Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('indonesia');
// });
//
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery drawa is happening 🎲');

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You Win 💰');
    } else {
      reject(new Error('You loses your Money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisfyng setTimeout
const wait = second => {
  return new Promise(resolve => {
    setTimeout(resolve, second * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 1 second');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 second');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 second');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 second');
    return wait(1);
  })
  .then(() => console.log('I waited for 5 second'));

*/

/*
function whereAmI() {
  getPosition()
    .then(pos => {
      const { latitud: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })
    .then(res => res.json())
    .then(data => {
      console.log(`Your in ${data.city}, ${data.countryName}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`);
    })
    .then(res => res.json())
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

// btn.addEventListener('click', function () {
//   whereAmI(52.508, 13.381);
//   whereAmI(19.037, 72.873);
//   whereAmI(-33.933, 18.474);
// });
*/

const getPosition = () => {
  return new Promise((resolve, reject) => {
    // 1)
    // navigator.geolocation.getCurrentPosition(
    //   post => resolve(post),
    //   err => reject(err)
    // );

    // 2)
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitud: lat, longitude: lng } = pos.coords;

    // Reverse GeoCoding
    const geoCoding = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    const dataGeo = await geoCoding.json();
    // console.log(dataGeo);

    // country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.countryName}`
    );
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err}`);
    renderError(`Something wnet wrong ${err.message}`);
  }
};

whereAmI();
console.log('first');

// btn.addEventListener('click', whereAmI);

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err);
// }
