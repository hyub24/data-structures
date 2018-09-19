var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  push: function(val) {
    this.count++;
    this.storage[this.count] = val;
  },

  pop: function() {
    var popVal = this.storage[this.count];
    if (this.count !== 0) {
      this.count--;
    }
    return popVal;
  },

  size: function() {
    return this.count;
  }
};


