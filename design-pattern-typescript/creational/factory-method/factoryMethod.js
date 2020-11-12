class Document {
  render() {
    return null;
  }
}
class Div {
  render() {
    return '<div></div>';
  }
}
class Section {
  render() {
    return '<Section></Section>';
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

const domFactory = new DOMFactory();
const div = domFactory.createElement('div');
const section = domFactory.createElement('section');
