/* eslint-disable no-undef */
const divide = require('../index');
//const sort = require('../index');
//const diff = require('../index');
const chai = require('chai');
const expect = chai.expect;

describe('Divide function', () => {
    it('should divide positive integers correctly', ()=>{
        //const a = 8;
        //const b = 4;
        //const expectedAnswer = 2;
        //const actualAnswer = divide(a, b);
        //expect(actualAnswer).to.equal(expectedAnswer);
        expect(divide(8,4)).to.equal(2);
    });
    it('should throw an error when divide by zero', ()=>{
        //const a = 8, b = 0 ;
        //const fn = () => {
        //    divide(a, b)
        //}
        //expect(fn).to.throw();
        expect(()=> {divide(8,0)}).to.throw();
    })

    //it('should return -1 when the value is not present', () =>{
    //    const array = [18,3, 44, 6, 11];
    //    const expectArray = [3, 6, 11, 18, 44];
    //    expect(sort(array)).to.deep.equal(expectArray);
    //     })

})

