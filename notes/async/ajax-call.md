## First AJAX call: XMLHTTPREQUEST

### XMLHHttpRequest

XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.

The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.

```js
.open()

open(method, url)
open(method, url, async)
open(method, url, async, user)
open(method, url, async, user, password)
```

```js
// Old School
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    const langu = Object.values(data.languages);
    const name = Object.values(data.currencies)[0].name;

    const html = `
    <article class="country">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.official}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${langu}</p>
          <p class="country__row"><span>💰</span>${name}</p>
        </div>
    </article>`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("indonesia");
getCountryData("usa");
```

[Next: Welcome to Callback Hell](./welcome-to-callback-hell.md)
