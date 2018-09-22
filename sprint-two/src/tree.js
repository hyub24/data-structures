var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  child.parent = this;
  this.children.push(child);
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

treeMethods.removeFromParent = function() {
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i] === this) {
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * for treeMethods.addChild the complexity is O(1)
 * for treeMethods.contains the complexity is O(n)
 * for treeMethods.traverse the complexity is O(n)
 */
