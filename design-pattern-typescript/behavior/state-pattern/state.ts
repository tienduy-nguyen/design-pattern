//SIMPLE TOGGLE
interface IToggleState{
  toggle(state: IToggleState): void;
}
class ToggleContext{
  currentState: any;
  constructor(){
    this.currentState = new Off();
  }
  setState(state: IToggleState){
    this.currentState = state;
  }
  // Return state of context
  toggle(){
    this.currentState.toggle(this)
  }
}
class Off implements IToggleState{
  toggle(ctx: ToggleContext){
    console.log('OFF')
    ctx.setState(new On())
  }
}
class On implements IToggleState{
  toggle(ctx: ToggleContext){
    console.log('ON')
    ctx.setState(new Off())
  }
}

let button = new ToggleContext();
button.toggle();
button.toggle();
button.toggle();
button.toggle();

export { }


// https://github.com/anuraghazra/design-patterns-everyday/blob/master/behavioral/state-pattern.ts