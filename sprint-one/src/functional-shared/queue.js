var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.front = 0;
  someInstance.back = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.count++;
    this.storage[this.back] = value;
    this.back++;
  },

  dequeue: function() {
    if (this.count !== 0) {
      this.count--;
    }
    var dequeueVal = this.storage[this.front];
    this.front++;
    return dequeueVal;
  },

  size: function() {
    return this.count;
  }
};


