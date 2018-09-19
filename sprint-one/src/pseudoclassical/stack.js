var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(val) {
  this.count++;
  this.storage[this.count] = val;
};

Stack.prototype.pop = function() {
  var popVal = this.storage[this.count];
  if (this.count !== 0) {
    this.count--;
  }
  return popVal;
  
};

Stack.prototype.size = function() {
  return this.count;
};

new Stack();
