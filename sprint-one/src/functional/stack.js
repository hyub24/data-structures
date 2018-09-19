var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var num = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    
    count++;
    num++;
    storage[num] = value;
  };

  someInstance.pop = function() {
    
    if (count !== 0) {
      count--;
    }
    var popValue = storage[num];
    
    //storage.num = undefined;
    if (num !== 0) {
      num--;
    }

    return popValue;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
