(function(){
'use strict';


var expect = chai.expect;



var log10 = fav.math.log10;

describe('fav.math.log10', function() {

  it('SHould calculate the base 10 logarithm of a number', function() {
    expect(log10(2)).to.be.within(0.3010299956639812, 0.3010299956639813);
    expect(log10(1)).to.equal(0);
    expect(log10(0)).to.equal(-Infinity);
    expect(log10(-2)).to.be.NaN;
    expect(log10(100000)).to.equal(5);
  });

});

})();
