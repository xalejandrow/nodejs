console.log('Retry and Timeuts');

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){

    beforeEach(function(done){
        this.timeout(5000);
        setTimeout(done,3000);
    });
    

    var a = 10;
    var b = 10;

    it('Addition of two variables', function(done){
        this.timeout(500);
       setTimeout(done, 3000);
        var c = a + b;
    assert.equal(c,20);
    });

    it('Substraction of two variables', function(){
      
        var c = a - b;
        assert.equal(c,0);
    });

    it('Multiplication of two variables', function(){
       
        var c = a * b;
        assert.equal(c,100);
    });

    it('Division of two variables', function(){
       
        var c = a / b;
        assert.equal(c,1);
    });


});