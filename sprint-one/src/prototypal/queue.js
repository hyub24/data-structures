var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;
  someInstance.front = 0;
  someInstance.back = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  enqueue: function(val) {
    this.count++;
    this.storage[this.back] = val;
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
  },
};


