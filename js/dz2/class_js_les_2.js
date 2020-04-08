class Game {
        max;
        min;

  constructor(max, min, count) {
      if (Game.isInteger(max)) {
          this.max=max;
      }
      else {
          stop();
      }
      if (Game.isInteger(min)) {
          this.min=min;
      }
      else {
          stop();
      }
      if (Game.isInteger(count)) {
          this.maxAttempt=count;
          this.leftAttempt=count;
      }
      else {
          stop();
      }
      this.secretNumber=this.generateSecretNumber(this.min, this.max);
  }
  static isInteger(num) {
        return (num ^ 0) === num;
    }
  getMaxAttempt() {
      return this.maxAttempt;
  }
  getLeftAttempt() {
      return this.leftAttempt;
  }
  getSecretNumber() {
        return this.secretNumber;
  }
  getMin() {
      return this.min;
  }
  getMax() {
      return this.max;
  }
  getInputText() {
      return this.inputText;
  }
  generateSecretNumber(min,max) {
      return (parseInt(Math.random()*(max-min))+min);
  }
  testInteger(inputText) {
      if (this.isInteger(inputText)) {
          return inputText;
      }
  }
  playStep(inputText) {
    if (inputText>=this.min && inputText<=this.max) {
        if (this.secretNumber!=inputText) {
            this.leftAttempt--;
            return false;
        }
        else {
            this.leftAttempt--;
            return true;
        }
    }
    else {
        this.leftAttempt--;
        return "error";
      }

  }
}