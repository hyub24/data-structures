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
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {
  var search = function(node, target) {
    if(node.value === target) {
      return true;
    }
    var isFound = false;
    for(var i = 0; i<node.children.length; i++) {
      isFound = search(node.children[i], target);
      if(isFound) {
        return true;
      }
    }
    return false;
  }
  return search(this, target);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
