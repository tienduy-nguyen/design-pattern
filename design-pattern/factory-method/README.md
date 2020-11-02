## Factory Method

`Factory method pattern`, its similar to abstract factory method but has some subtle differences. In `abstract factory pattern` it creates factories & sub factories depending on the type but `factory method` is pretty straight forward, it has only one factory.

### Use cases
DOM API's document.createElement method is a Factory method which creates different type of HTML elements depending on the passed type.

### Example

```js
class Document {
  render() {
    return null;
  }
}
class Div extends Document {
  render() {
    return '<div />';
  }
}
class Section extends Document {
  render() {
    return '<section />';
  }
}
class DOMFactory {
  createElement(type) {
    switch (type) {
      case 'div':
        return new Div();
      case 'section':
        return new Section();
      default:
        break;
    }
  }
}

let domFactory = new DOMFactory();
let div = domFactory.createElement('div');
let section = domFactory.createElement('section');
```