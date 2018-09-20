var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Node(5));
};

treeMethods.contains = function(target) {
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
