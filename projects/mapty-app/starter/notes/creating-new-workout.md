## Creating New Workout

```js
  _newWorkout(event) {
    const validateInput = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    event.preventDefault();
    // Get Data From form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value; // Check if data valid
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // if workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !validateInput(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert('Inputs have to be Positive number !');
      }

      // add new Object to Workot array
      workout = new Running([lat, lng], distance, duration, cadence);
    }
    // if workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      console.log(duration, distance, elevation);
      if (
        !validateInput(distance, duration, elevation) ||
        !allPositive(distance, duration)
      ) {
        return alert('Inputs have to be Positive number !');
      }

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // add new Object to Workot array
    this.#workout.push(workout);
    console.log(workout);

    // render workout on map as marker
    this.renderWorkoutMarker(workout);
    // render Workout list

    // hide form and clear
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
  }

  renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${workout.distance}`)
      .openPopup();
  }
}
```

[Next: Rendering Workouts](./rendering-workouts.md)
