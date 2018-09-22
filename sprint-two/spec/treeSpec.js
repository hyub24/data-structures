describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });
  
  it('NEW TEST 1: should apply a callback function to every node in this tree', function() {
    testTree = new Tree(2);
    testTree.addChild(5);
    testTree.addChild(6);
    testTree.addChild(0);
    var arr = [];
    var cb = function(val) { arr.push(val); };
    testTree.traverse(cb);
    expect(arr).to.eql([2, 5, 6, 0]);
  });

  it('NEW TEST 2: should have parent values for each child', function() {
    testTree = new Tree(2);
    testTree.addChild(5);
    testTree.children[0].addChild(6);
    expect(testTree.children[0].parent.value).to.equal(2);
    expect(testTree.children[0].children[0].parent.value).to.equal(5);
  });

  it('NEW TEST 3: should have a removeFromParent function that disassociates the tree with its parent (in both directions)', function() {
    expect(tree.removeFromParent).to.be.a('function');
    testTree = new Tree(2);
    testTree.addChild(5);
    testTree.children[0].addChild(6);
    var childTree = testTree.children[0];
    childTree.removeFromParent();
    expect(childTree.parent).to.equal(null);
    expect(testTree.children[0]).to.equal(undefined);
    expect(childTree.children[0].value).to.equal(6);
  });


});
