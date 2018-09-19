class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(val) {
    this.count++;
    this.storage[this.count] = val;
  }

  pop() {
    var popVal = this.storage[this.count];
    if (this.count !== 0) {
      this.count--;
    }
    return popVal;
  }

  size() {
    return this.count;
  }

}

new Stack();