function whereAmI(lat, lng) {
  return fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      // renderCountry(data);

      console.log(`Your in ${data.city}, ${data.countryName}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`);
    })
    .then((res) => res.json())
    .then((data) => {
      renderCountry(data[0]);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

btn.addEventListener("click", function () {
  whereAmI(52.508, 13.381);
  whereAmI(19.037, 72.873);
  whereAmI(-33.933, 18.474);
});
