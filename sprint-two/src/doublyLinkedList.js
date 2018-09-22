
var doublyLinkedList = function() {
    this.head = null;
    this.tail = null;
};

doublyLinkedList.prototype.addToHead = function(value) {
    if (this.head === null) {
        this.head = new BiNode(value);
        this.tail = this.head;
    } else {
        var placeholder = this.head;
        this.head = new BiNode(value);
        placeholder.prev = this.head;
        this.head.next = placeholder;
    }
};

doublyLinkedList.prototype.removeTail = function() {
  if(this.tail === null) {
      return;
  }
  var placeholder = this.tail;
  this.tail = this.tail.prev;
  return(placeholder.value);
};


var BiNode = function(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
};