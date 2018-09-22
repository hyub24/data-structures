var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var link = this._storage.get(index);
  if (link === undefined) {
    this._storage.set(index, new hashLink(k, v));
    this.increaseSize();
    return;
  }

  if (link.key === k) {
    link.value = v;
    this.increaseSize();
    return;
  }

  while (link.next !== null) {
    link = link.next;
    if (link.key === k) {
      link.value = v;
      this.increaseSize();
      return;
    }
  }

  link.next = new hashLink(k, v);
  this.increaseSize();
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var link = this._storage.get(index);
  while (link !== null && link !== undefined) {
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

  while (link.next !== null && link.next !== undefined) {
    if (link.next.key === k) {
      link.next = link.next.next;
    }
    link = link.next;
  }
  this.decreaseSize();
};

HashTable.prototype.increaseSize = function() {
  var curSize = 0;
  var hashArray = this._storage;
  this._storage.each(function(node, bucket, hash) {
    if (node !== undefined && node !== null) {
      curSize++;
      while (node.next !== null) {
        curSize++;
        node = node.next;
      }
    }
  })
  if (curSize/this._limit > 0.75) {
    this._limit += this._limit;
  } else {
    return;
  }

  var remakeArray = [];
  this._storage.each(function(node, bucket, hash) {
    if (node === undefined) {
      return;
    }
    while (node !== null) {
      var temp = [node.key, node.value];
      remakeArray.push(temp);
      node = node.next;
    }
  });
  this._storage = LimitedArray(this._limit);

  for (var i = 0; i < remakeArray.length; i++) {
    this.insert(remakeArray[i][0], remakeArray[i][1]);
  }
};

HashTable.prototype.decreaseSize = function() {
  var curSize = 0;
  var hashArray = this._storage;
  this._storage.each(function(node, bucket, hash) {
    if (node !== undefined && node !== null) {
      curSize++;
      while (node.next !== null) {
        curSize++;
        node = node.next;
      }
    }
  })
  if (curSize/this._limit < 0.25) {
    this._limit = Math.floor(this._limit/2)
  } else {
    return;
  }

  var remakeArray = [];
  this._storage.each(function(node, bucket, hash) {
    if (node === undefined || node === null) {
      return;
    }
    while (node !== null) {
      var temp = [node.key, node.value];
      remakeArray.push(temp);
      node = node.next;
    }
  });
  this._storage = LimitedArray(this._limit);

  for (var i = 0; i < remakeArray.length; i++) {
    this.insert(remakeArray[i][0], remakeArray[i][1]);
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