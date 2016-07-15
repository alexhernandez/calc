class Calculator {

  constructor(screen="calc__total") {
    this.val = [];
    this.operator = "";
    this.screen = document.getElementsByClassName(screen)[0];
  }

  init() {
    this.setScreen();
    this.setNumKeyListeners();
    this.setOperatorKeyListeners();
    this.setBackspaceKeyListeners();
  }

  setScreen() {
    this.screen.innerHTML = (this.val.length == 0) ? "" : this.val.join('');
    console.log(this);
  }

  setNumKeyListeners() {
    let numKeys = document.getElementsByClassName("calc__int");

    for (let i = 0; i < numKeys.length; i++) {
      numKeys[i].addEventListener('click', (event) => {
        return this.pushScreenValue(event.target.innerHTML);
      });
    }
  }

  setOperatorKeyListeners() {
    let operatorKeys = document.getElementsByClassName("calc__operator");
    // let operators = ["/","*","-","+","="];

    for (let i = 0; i < operatorKeys.length; i++) {
      operatorKeys[i].addEventListener('click', (event) => {
        console.log(event.target.innerHTML);
      });
    }
  }

  setBackspaceKeyListeners() {
    let backspace = document.getElementsByClassName("calc__backspace");
    backspace[0].addEventListener('click', () => this.popScreenValue());
  }

  pushScreenValue(value) {
    this.val.push(value);
    this.setScreen();
  }

  popScreenValue(value) {
    (this.val.length == 1) ? this.clear() : this.val.pop();
    this.setScreen();
  }

  add(value) {
    return this.val += value;
  }

  subtract(value) {
    return this.val -= value;
  }

  multiply(value) {
    return this.val *= value;
  }

  divide(value) {
    return this.val /= value;
  }

  clear() {
    return this.val = [];
  }

}

export default Calculator;
