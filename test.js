'use strict';

const assert = require('chai').assert;
const aritGeo = require('./aritGeo');

describe("Arithmetic Checker", function() {
  it("should return 'Aritmetic'", function() {
    assert.equal(aritGeo([1,2,3,4,5]), "Arithmetic");
  })
  it("should return 'Aritmetic'", function() {
    assert.equal(aritGeo([5,6,7,8,9]), "Arithmetic");
  })
  it("should return 'Aritmetic'", function() {
    assert.equal(aritGeo([3,4,5,6,7]), "Arithmetic");
  })
  it("should return '0'", function() {
    assert.equal(aritGeo([]), 0);
  })
  it("should return '-1'", function() {
    assert.equal(aritGeo([3,5,6,7]), -1);
  })
})

describe("Geometric Checker", function() {
  it("should return 'Geometric' ", function() {
    assert.equal(aritGeo([2,4,8,16]), "Geometric");
  })
  it("should return 'Geometric' ", function() {
    assert.equal(aritGeo([3,6,12,24]), "Geometric");
  })
  it("should return 'Geometric' ", function() {
    assert.equal(aritGeo([5,10,20,40]), "Geometric");
  })
  it("should return '0'", function() {
    assert.equal(aritGeo([]), 0);
  })
  it("should return '-1'", function() {
    assert.equal(aritGeo([3,5,6,7]), -1);
  })
})