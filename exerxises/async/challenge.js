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

const wait = (second) => {
  return new Promise((resolve) => {
    setTimeout(resolve, second * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImg = (imgPath) => {
  return new Promise((res, rej) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", () => {
      imgContainer.append(img);
      res(img);
    });

    img.addEventListener("error", () => {
      rej(new Error("Image not Found"));
    });
  });
};

let currentImage;

createImg(`img/img-1.jpg`)
  .then((img) => {
    currentImage = img;
    console.log(`image 1 loaded`);
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImg("img/img-2.jpg");
  })
  .then((img) => {
    currentImage = img;
    console.log(`image 1 loaded`);
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImg("img/img-3.jpg");
  })
  .then((img) => {
    currentImage = img;
    console.log(`image 1 loaded`);
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
  })
  .catch((err) => console.log(err));
