## Abstract Factory Pattern

Abstract factory is a creational design pattern which allows us to produce families of objects without specifying their concrete classes.

Suppose you are creating a drawing app where you'll have tools like "draw box", "draw circle" but you also need rounded
variants of box & circle, in that case you can create a factory for "ShapeFactory" and "RoundedShapeFactory" which will
return respective shapes.

### Use cases

- Abstract factory pattern could be helpful in scenarios while you need to have a framework work cross plate-form.

- Create familiar objects
- Provide complete methods (can be synthesized a library) to generate objects
- Create special objects from parent class
- Simply extends new class from old class

### Example

```js
class Button {
  render() {}
}

class Factory {
  createButton() {}
}

class WinButton extends Button {
  render() {
    return "<button class='windows'></button>";
  }
}

class LinuxButton extends Button {
  render() {
    return "<button class='linux'></button>";
  }
}

class WinFactory extends Factory {
  createButton() {
    return new WinButton();
  }
}
class LinuxFactory extends Factory {
  createButton() {
    return new LinuxButton();
  }
}

class AbstractFactory {
  static factory(type) {
    switch (type) {
      case 'windows':
        return new WinFactory();
      case 'linux':
        return new LinuxFactory();

      default:
        break;
    }
  }
}

let guiFactory = AbstractFactory.factory('linux');
let button = guiFactory.createButton();
console.log(button.render());
```


[Ref](https://dev.to/anuraghazra/design-patterns-everyday-53m0#Day-2)