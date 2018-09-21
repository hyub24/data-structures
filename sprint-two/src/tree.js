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
  var searchTarget = function (node, target) {
    var val = false;

    if (node.value === target) {
      return true;
    }
    for (var i = 0; i < node.children.length; i++) {
      val = searchTarget(node.children[i], target);
      if (val === true) {
        return true;
      }
    }
    return val;
  };
  return searchTarget(this, target);
};

treeMethods.traverse = function(cb, node) {
  if (node === undefined) {
    node = this;
  }
  
  cb(node.value);
  for (var i = 0; i < node.children.length; i++) {
    node.traverse(cb, node.children[i]);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
