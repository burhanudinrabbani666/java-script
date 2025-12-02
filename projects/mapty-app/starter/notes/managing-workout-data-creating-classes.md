## Managing Workout Data: Creating Classes

[ Crypto: randomUUID() method](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)

The randomUUID() method of the Crypto interface is used to generate a v4 UUID using a cryptographically secure random number generator.

```js
id = self.crypto.randomUUID();
```

Workout Architecture

```js
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
```

[Next - Creating New Workout](./creating-new-workout.md)
