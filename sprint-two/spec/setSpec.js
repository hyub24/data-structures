describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('NEW TEST 1: should only contain one copy of each unique value in set', function() {
    set.add('happy');
    set.add('happy');
    set.remove('happy');
    expect(set.contains('happy')).to.be.false;
  });

  it('NEW TEST 2: should be able to handle input objects of any type', function() {
    set.add(1);
    set.add('hello');
    set.add(null);
    set.add(undefined);
    set.add({'a': 4});
    set.add([1, 2]);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains('hello')).to.equal(true);
    expect(set.contains(null)).to.equal(true);
    expect(set.contains(undefined)).to.equal(true);
    expect(set.contains({'a': 4})).to.equal(true);
    expect(set.contains([1, 2])).to.equal(true);
  })

});
