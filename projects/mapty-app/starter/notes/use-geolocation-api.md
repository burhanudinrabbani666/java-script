## Using GEOLOCATION API

[Geolocation: getCurrentPosition() method](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)

The Navigator.geolocation read-only property returns a Geolocation object that gives Web content access to the location of the device. This allows a website or app to offer customized results based on the user's location.

The getCurrentPosition() method of the Geolocation interface is used to get the current position of the device.

```js
getCurrentPosition(success);
getCurrentPosition(success, error);
getCurrentPosition(success, error, options);
```

exm:

```js
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // if allow
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    },
    function () {
      // if not allow
      alert('Can get your Location!');
    }
  );
```

[Next: Display A Map Using leafflet library](./display-map.md)
