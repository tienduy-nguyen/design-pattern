interface Component2 {
  operation: Function;
}

abstract class Leaf implements Component2 {
  operation() {}
}

abstract class Composite implements Component2 {
  protected childs: Component2[] = [];

  operation() {
    this.childs.forEach((child) => {
      child.operation();
    });
  }
  add(component: Component2) {
    this.childs.push(component);
  }
  remove(component: Component2) {
    this.childs.splice(this.childs.indexOf(component), 1);
  }
  getChild() {
    return this.childs;
  }
}

class Duck extends Composite {
  constructor(childs: Component2[]) {
    super();
    this.childs = childs;
  }
}

class DuckVoice extends Leaf {
  operation() {
    console.log('Quack.');
  }
}
class DuckFly extends Composite {
  operation() {
    console.log('It flies');
    super.operation();
  }
  add(component: Component2) {
    super.add(component);
    return this;
  }
}

class Wing extends Leaf {
  operation() {
    console.log('Flap-flap-flap');
  }
}

const wings = [new Wing(), new Wing()];
const flyAbility = new DuckFly().add(wings[0]).add(wings[1]);
const voiceAbility = new DuckVoice();

const duck = new Duck([flyAbility, voiceAbility]);

duck.operation();
