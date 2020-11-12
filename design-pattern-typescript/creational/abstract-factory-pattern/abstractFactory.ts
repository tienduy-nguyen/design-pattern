interface SoundFactory {
  create: Function;
}

interface Sound {
  enable: Function;
}

class FerrariSound implements Sound {
  enable() {
    console.log('Wroom-wroom-wroom');
  }
}
class BirdSound implements Sound {
  enable() {
    console.log('Flap-flap-flap');
  }
}

class FerrariSoundFactory implements SoundFactory {
  create() {
    return new FerrariSound();
  }
}
class BirdSoundFactory implements SoundFactory {
  create() {
    return new BirdSound();
  }
}
enum FactoryType {
  FERRARI = 'ferrari',
  BIRD = 'bird',
}

class AbsFactory {
  static factory(type) {
    switch (type) {
      case FactoryType.FERRARI:
        return new FerrariSoundFactory();
      case FactoryType.BIRD:
        return new BirdSoundFactory();
      default:
        break;
    }
  }
}

//build
const ferFac = AbsFactory.factory(FactoryType.FERRARI);
const birdFac = AbsFactory.factory(FactoryType.BIRD);
ferFac.create();
birdFac.create();
