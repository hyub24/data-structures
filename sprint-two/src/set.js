var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  return this._storage[item] === true;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * for setPrototype.add the complexity is O(1)
 * for setPrototype.contains the complexity is O(1)
 * for set.Prototype.remove the complexity is O(1)
 */
