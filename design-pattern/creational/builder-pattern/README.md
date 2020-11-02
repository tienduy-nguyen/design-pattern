## Builder Pattern

Builder pattern is creational design pattern which allows us to create complex objects in a step by step manner. It allows us to create different type of objects with same code.


### Real world analogy

Think of it as car assembly line. The car will be assembled with parts gradually step by step, firstly its chassis will
be setup then the engine, radiator, wheels, seats, doors. and by modifying these steps in the assembly line we can
create different types of car models with the same assembly line.

### Use cases

Builder pattern is usefull when you want to create various objects with different representation without creation subclasses for each of them

### Example

```js
class Car {
  constructor(engine, fuelTank, seats) {
    this.engine = engine;
    this.fuelTank = fuelTank;
    this.seats = seats;
  }

  printSpecs() {
    console.log(this.engine, this.fuelTank, this.seats);
  }
}
class CarBuilder {
  constructor() {
    this.engine = '';
    this.seats = '';
    this.fuelTank = '';
  }

  addSeats(name) {
    this.seats = name;
    return this;
  }
  addEngine(value) {
    this.engine = value;
    return this;
  }
  addFuelTank(value) {
    this.fuelTank = value;
    return this;
  }

  build() {
    return new Car(this.engine, this.fuelTank, this.seats);
  }
}

let truck = new CarBuilder()
  .addSeats(8)
  .addEngine('v12')
  .addFuelTank('200liters')
  .build();

let sedan = new CarBuilder()
  .addSeats(4)
  .addEngine('v6')
  .addFuelTank('100liters')
  .build();
```

[Ref](https://dev.to/anuraghazra/design-patterns-everyday-53m0#Day-2)