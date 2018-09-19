var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var enqueueNum = 0;
  var firstInLine = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[enqueueNum] = value;
    enqueueNum++;
  };

  someInstance.dequeue = function() {
    var dequeueVal = storage[firstInLine];
    if (count !== 0) {
      count--;
    }
    firstInLine++;
    return dequeueVal;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
