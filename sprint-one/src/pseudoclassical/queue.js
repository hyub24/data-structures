var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.front = 0;
  this.back = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(val) {
  this.count++;
  this.storage[this.back] = val;
  this.back++;
};

Queue.prototype.dequeue = function() {
  if (this.count !== 0) {
    this.count--;
  }
  var dequeueVal = this.storage[this.front];
  this.front++;
  return dequeueVal;
};

Queue.prototype.size = function() {
  return this.count;
};
new Queue();


