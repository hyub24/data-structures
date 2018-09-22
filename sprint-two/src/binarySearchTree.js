var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.right = null;
  newTree.left = null;
  newTree.maxdepth = 1;
  newTree.mindepth = 1;
  _.extend(newTree, binarySearchMethods);
  return newTree;
};

var binarySearchMethods = {};

binarySearchMethods.insert = function(element, node, depth) {

  var recurInsert = function(element, node, depth) {
    if (element > node.value) {
      if (node.right === null) {
        node.right = new BinarySearchTree(element);
        depth += 1;
        if (depth > max) {
          max = depth;
        } else if (depth < max && depth > min) {
          min = depth;
        }
      } else {
        recurInsert(element, node.right, depth+1);
      }
    } else if (element < node.value) {
      if (node.left === null) {
        node.left = new BinarySearchTree(element);
        depth += 1;
        if (depth > max) {
          max = depth;
        } else if (depth < max && depth > min) {
          min = depth;
        }
      } else {
        recurInsert(element, node.left, depth+1);
      }
    }
  }

  var max = this.maxdepth;
  var min = this.mindepth;
  recurInsert(element, this, 1);
  // this.maxdepth = max;
  // this.mindepth = min;
  // if (this.maxdepth > 2*this.mindepth) {
  //   this.newT
  // }
};

binarySearchMethods.contains = function(target, node) {
  if (node === undefined) {
    node = this;
  }
  if (node === null) {
    return false;
  }
  if (target === node.value) {
    return true;
  } else if (target > node.value) {
    return this.contains(target, node.right);
  } else {
    return this.contains(target, node.left);
  }
};

binarySearchMethods.depthFirstLog = function(cb, node) {
  if (node === undefined) {
    node = this;
  } else if (node === null) {
    return;
  }

  cb(node.value);
  this.depthFirstLog(cb, node.left);
  this.depthFirstLog(cb, node.right);
};

// binarySearchMethods.breadthFirstLog = function(cb, node) {
//   if (node === undefined) {
//     node = this;
//   } else if (node === null) {
//     return;
//   }
  
// }

binarySearchMethods.inOrderTraversal = function(cb, node) {
  if (node === undefined) {
    node = this;
  } else if (node === null) {
    return;
  }

  this.inOrderTraversal(cb, node.left);
  cb(node.value);
  this.inOrderTraversal(cb,node.right);
}



binarySearchMethods.rebalance = function() {
  var allNums = [];
  this.inOrderTraversal(function(value) {
    allNums.push(value);
  });

  var treeBalancer = function(array) {
    if (array.length === 1) {
      pushOrder.push(array[0]);
      return;
    }
    treeBalancer(array.slice(0, Math.floor(array.length/2)));
    treeBalancer(array.slice(Math.floor(array.length/2), array.length));
  }

  var pushOrder = [];
  treeBalancer(allNums);

  var output = new BinarySearchTree(pushOrder[0]);
  for (var i = 1; i < pushOrder.length; i++) {
    output.insert(pushOrder[i]);
  }
  return output;
}



binarySearchMethods.getDepth = function() {
  var height = 0;
  var maxheight = 0;
  var minheight;

  var depthCheck = function(node, height) {
    if (node === null) {
      return;
    }
    
    height += 1;
    depthCheck(node.left, height);
    depthCheck(node.right, height);

    if (height > maxheight) {
      maxheight = height;
    }
    if (height < minheight || minheight === undefined) {
      minheight = height;
    }
    
    height = 0;
  };
  depthCheck(this, height);
  return [maxheight, minheight];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * binarySearchMethods.insert has a complexity of O(n) - worst case
 * binarySearchMethods.contains has a complexity of O(n) - worst case
 * binarySearchMethods.depthFirstLog has a complexity of O(n) - worst case
 * binarySearchMethods.getheight has a complexity of O(n) - worst case
 */
