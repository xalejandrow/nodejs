// Test Suite - Mathematical Operations

const { isMainThread } = require("worker_threads");

// Test Cases

// 1. Addition
// 2. Substraction
// 3. Multiplication
// 4. Division
var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){

    it('Addition of two variables', function(){
        var a = 10;
        var b = 10;
        var c = a + b;
    assert.equal(c,20);
    });

    it('Substraction of two variables', function(){
        var a = 10;
        var b = 10;
        var c = a - b;
        assert.equal(c,0);
    });

    it('Multiplication of two variables', function(){
        var a = 10;
        var b = 10;
        var c = a * b;
        assert.equal(c,100);
    });

    it('Division of two variables', function(){
        var a = 10;
        var b = 10;
        var c = a / b;
        assert.equal(c,0);
    });

});