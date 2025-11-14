## Default Parameters

```js
const bookings = [];

const createdBooking = function (
  flightNum,
  numPassengers = 1, // Default Value
  price = 199 * numPassengers // Default Value
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(bookings);
};

createdBooking(`Lh123`, 3);
createdBooking(`Lh123`, 6);
createdBooking(`Lh123`, 10);
```
