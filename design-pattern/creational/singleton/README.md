## Sigleton

Sigleton is a creational design pattern that ensures a class will only have one instance

### Real world analogy
A good real world analogy for singleton is Government, a country can only have one government reagardless of how many person it consists of it be always titled as "Goverment of {Country}"

### Example

Ex1: 
```js
class Singleton {
  static instance = new Singleton();
  static getInstance() {
    return this.instance;
  }

  showMessage() {
    console.log('Hello singleton');
  }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true

instance2.showMessage();
```

Ex2:

```ts
class Singleton {
  private static _instance: Singleton | null;
  private constructor() {}
  static getInstance() {
    if (!this._instance) {
      this._instance = new Singleton();
    }
    return this._instance;
  }
}

console.log(Singleton.getInstance() === Singleton.getInstance());
//true

```

Ex3:
```ts

```