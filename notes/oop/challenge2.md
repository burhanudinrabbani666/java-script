## Challenge 2

```js
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speedUS = speed / 1.6;
  }

  acceleration() {
    this.speed += 10;

    console.log(`${this.make} has ${this.speed}km/h`);
  }

  break() {
    this.speed -= 5;

    console.log(`${this.make} has ${this.speed}km/h`);
  }

  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car("Ford", 120);
ford.acceleration();
ford.acceleration();
ford.acceleration();
ford.acceleration();
ford.break();
ford.break();
ford.break();
ford.break();

ford.speedUS = 200;
console.log(ford.speedUS);
```
