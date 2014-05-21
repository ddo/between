var expect = require('chai').expect;

var between = require('./');

describe("between", function() {
    it("#1", function() {
        expect(between("hello world", 'hel', 'ld')).to.be.equal('lo wor');
    });

    it("#2", function() {
        expect(between("i'm so cool", 'm', 'oo')).to.be.equal(' so c');
    });
});