var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var link = this._storage.get(index);
  if (link === undefined) {
    this._storage.set(index, new hashLink(k, v));
    return;
  }

  if (link.key === k) {
    link.value = v;
    return;
  }

  while (link.next !== null) {
    link = link.next;
    if (link.key === k) {
      link.value = v;
      return;
    }
  }

  link.next = new hashLink(k, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var link = this._storage.get(index);
  while (link !== null) {
    if (link.key === k) {
      return link.value;
    }
    link = link.next;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var link = this._storage.get(index);
  if (link === undefined) {
    return;
  }
  
  if (link.key === k) {
    this._storage.set(index, link.next);
  }

  while (link.next !== null) {
    if (link.next.key === k) {
      link.next = link.next.next;
    }
    link = link.next;
  }
};

var hashLink = function(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * for Hashtable.prototype.insert the complexity is O(n) - worst case
 * for Hashtable.prototype.retrieve the complexity is O(n) - worst case
 * for Hashtable.prototype.remove the complexity is O(n) - worst case
 */