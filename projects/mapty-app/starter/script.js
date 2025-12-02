'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = self.crypto.randomUUID();

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance; // in Km/h
    this.duration = duration; // Minute
  }
}

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadiance) {
    super(coords, distance, duration);
    this.cadiance = cadiance;
    this.calcPace();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    // min/km
    this.Speed = this.distance / this.duration / 60;
    return this.Speed;
  }
}

// ------------------------------------- //
// APPLICATON ARCHITHECTURE
class App {
  // Private fields
  #map;
  #mapEvent;
  #workout = [];

  constructor() {
    // Instan Running
    this._getPositon();

    // DOM
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevation);
  }

  //------------------ Horizon Line ---------------------//

  _getPositon() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this), // bind Method for pointng to _getLocation
        function () {
          // set if not allow
          alert('Can get your Location!');
        }
      );
  }

  _loadMap(position) {
    // set if allow
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    this.#map = L.map('map').setView(coords, 13); // set map

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker(coords)
      .addTo(this.#map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevation() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

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
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
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

// Set app
const app = new App();
