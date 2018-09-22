describe('doublyLinkedList', function() {
    var dll;

    beforeEach(function() {
        dll = new doublyLinkedList();
    });

    it('should have a head and tail', function() {
        expect(dll.head).to.equal(null);
        expect(dll.tail).to.equal(null);
    });

    it('should have methods named "addToHead" and "removeTail"', function() {
        expect(dll.addToHead).to.be.a('function');
        expect(dll.removeTail).to.be.a('function');
    });

    it('should designate a new head when new nodes are added', function() {
        dll.addToHead(4);
        expect(dll.head.value).to.equal(4);
        dll.addToHead(5);
        expect(dll.head.value).to.equal(5);
    });

    it('should remove tail from the list when removeTail is called', function() {
        dll.addToHead(3);
        dll.addToHead(6);
        dll.addToHead(9);
        expect(dll.tail.value).to.equal(3);
        dll.removeTail();
        expect(dll.tail.value).to.equal(6);
        dll.removeTail();
        expect(dll.tail.value).to.equal(9);
        dll.removeTail();
        expect(dll.tail).to.equal(null);
    });

    it('should return the value of the former tail and returns its value', function() {
        dll.addToHead(4);
        dll.addToHead(8);
        expect(dll.removeTail()).to.equal(4);
    });

    it('should assign tail to newly created node when removeTail is called on empty list', function() {
        dll.addToHead(5);
        expect(dll.tail.value).to.equal(5);
        expect(dll.removeTail()).to.equal(5);
    });

});