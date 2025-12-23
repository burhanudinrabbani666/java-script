## Challenge 1

1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
   'speed' property. The 'speed' property is the current speed of the car in
   km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
   and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
   the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
   'brake' multiple times on each of them

Test data:

- Data car 1: 'BMW' going at 120 km/h
- Data car 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

```js
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelaeration = function () {
  this.speed += 10;
  console.log(`${this.make} has ${this.speed}km/h`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} has ${this.speed}km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 120);

bmw.accelaeration(); // BMW has 130km/h
bmw.break(); // BMW has 125km/h
bmw.break(); // BMW has 120km/h
bmw.accelaeration(); // BMW has 125km/h

mercedes.accelaeration(); // Mercedes has 135km/h
mercedes.accelaeration(); // Mercedes has 145km/h
mercedes.break(); // Mercedes has 135km/h
mercedes.break(); // Mercedes has 130km/h
```

[Next: ](./07-es6classes.md)
