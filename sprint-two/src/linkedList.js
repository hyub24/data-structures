var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.tail === null) {
      this.tail = new Node(value);
      if (this.head === null) {
        this.head = this.tail;
      }
    } else {
      if (this.head === null) {
        this.head = this.tail;
      }
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }

  };

  list.removeHead = function() {
    if (this.head === null) {
      return;
    }
    var val = this.head.value;
    this.head = this.head.next;
    return val;
  };

  list.contains = function(target) {
    var curNode = list.head;
    while (curNode !== null) {
      if (curNode.value === target) {
        return true;
      }
      curNode = curNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * for list.addToTail the complexity is O(1)
 * for list.removeHead the complexity is O(1)
 * for list.contains the complexity is O(n) - worst case
 */
