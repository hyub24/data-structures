class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.front = 0;
    this.back = 0;
    this.storage = {};
  }

  enqueue(val) {
    this.count++;
    this.storage[this.back] = val;
    this.back++;
  }

  dequeue() {
    if (this.count !== 0) {
      this.count--;
    }
    var dequeueVal = this.storage[this.front];
    this.front++;
    return dequeueVal;
  }

  size() {
    return this.count;
  }

}

new Queue();