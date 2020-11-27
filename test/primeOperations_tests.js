const chai = require("chai");
assert = chai.assert;
const primeOperations = require("../primeOperations");

describe("Basic Tests", function(){
    it("It should works for basic tests.", function(){
        assert.equal(primeOperations(2,3),2)
        assert.equal(primeOperations(1,1),0)
        assert.equal(primeOperations(206158430209,9664475137),3)
        assert.equal(primeOperations(123456789,123456789),0)
        assert.equal(primeOperations(5156486548,5),5)
        assert.equal(primeOperations(51539607551,824633720831),2)
        assert.equal(primeOperations(1000000000000,333333333333),32)
        assert.equal(primeOperations(549755813888,847288609443),64)
    })
});
