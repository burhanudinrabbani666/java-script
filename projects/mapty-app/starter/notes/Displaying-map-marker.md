## Displaying Map Marker

read the DOCS for another option:
[leafletjs - DOCS](https://leafletjs.com/reference.html)

```js
map.on('click', function (mapEvent) { // mapEvent or parameter in here otomaticly get the value
        const { lat, lng } = mapEvent.latlng; // distructuring to get cordinate
        console.log(lat, lng);

        L.marker([lat, lng]) // set cordinate with marker to map
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup ', // can add custom or personal css
            })
          )
          .setPopupContent('Workout')
          .openPopup();
      }
```

[Next: Rendering Workout Input Form](./rendering-workout-input-form.md)
