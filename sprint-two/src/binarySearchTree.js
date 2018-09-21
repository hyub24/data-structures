var BinarySearchTree = function(value) {
    var newTree = {};
    newTree.value = value;
    newTree.right = null;
    newTree.left = null;
    _.extend(newTree, binarySearchMethods);
    
    return newTree;
};

var binarySearchMethods = {};

binarySearchMethods.insert = function(element, node) {
    if (node === undefined) {
        node = this;
    }
    if (element > node.value) {
        if (node.right === null) {
            node.right = new BinarySearchTree(element);
            return;
        } else {
            this.insert(element, node.right);
        }
    } else if (element < node.value) {
        if (node.left === null) {
            node.left = new BinarySearchTree(element);
            return;
        } else {
            this.insert(element, node.left);
        }
    }
}

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
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
