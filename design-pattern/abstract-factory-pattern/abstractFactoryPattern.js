class Button {
  render() {}
}
class Factory {
  createButton() {}
}
class WinButton extends Button {
  render() {
    return "<Button class='windows'></Button>";
  }
}
class LinuxButton extends Button {
  render() {
    return "<Button class='linux'></Button>";
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

// Build
const guiFactory = AbstractFactory.factory('linux');
const button = guiFactory.createButton();

console.log(button.render());
