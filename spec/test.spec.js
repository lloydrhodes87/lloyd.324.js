
const { expect } = require('chai');
const { f } = require('../snap');

describe('snap()', () => {
    it('should return a string', () => {
        expect(typeof f(['1H','1D','1C','QC'])).to.equal('string');
    }),
    it('should return the string "2 snaps" when given the cards 1H,1D,1C,QC', () => {
        expect(f(['1H','1D','1C','QC','4D','2D'])).to.equal('3 Snaps');
    })
    it('should return the string "2 snaps" when given the cards 10H,10D,1C,QC', () => {
        expect(f(['10H','10D','1C','QC'])).to.equal('2 Snaps');
    })
    it('odd number of card test', () => {
        const arr = ['3C','AC','6H','2H','AH']
        expect(f(arr)).to.equal('2 Snaps')
    })
    it('joker test', () => {
        const arr = ['J','AC','6H','J','AH']
        expect(f(arr)).to.equal('2 Snaps')
    })
    it('3 hearts in a row test', () => {
        const arr = ['3C','AC','6H','2H','AH','JS','3D','2D']
        expect(f(arr)).to.equal('3 Snaps')
    })
    it('should count a snap if a joker is present', () => {
        expect(f(['J','10D','1C','QC'])).to.equal('2 Snaps')
    })
    it('long number test', () => {
        expect(f(['KS','J','2H','7H','9H','10S','KH','9S','KC','5S','4D','AS','QC','10C','7S','4H','5C','J','3H','5H','4C','JS','2C','QH','AH','6S','JH','2D','3D','AD','4S','1H','6H','1S','9C','7D','KD','QS','JC','8D','3S','10H','10D','7C','5D','2S','1C','8C','8S','9D','8H','AC','6C','3C','1D','QD','JD','6D'])).to.equal('14 Snaps')
    })
    it('bit bucket sample', () => {
        expect(f(['3C','AC','6H','2H','AH','7S','6D','4D','AS','J','JH','8S','QH','6C','QS','8C','10C','7C','KC','JD','4C','4H','8H','2D','KS','5H','5C','3D','9D','10S','7D','6S','7H','JS','1H','QC','1D','JC','10D','J','5S','QD','AD','5D','3H','1C','4S','KH','3S','2S','9C','10H','9H','8D','KD','1S','9S','2C'])).to.equal('15 Snaps')
    })
})