import { expect } from 'chai';
import mathmini from '../src';

describe('Testing add function', () => {
	it('add(10, 5) should return 15', () => {
         	expect(mathmini.add(10, 5)).to.equal(15);
	});
    it('add(10, 0) should return 10', () => {
        expect(mathmini.add(10, 0)).to.equal(10);
    });
});

describe('Testing sub function', () => {
	it('sub(10, 5) should return 5', () => {
         	expect(mathmini.sub(10, 5)).to.equal(5);
	});
    it('sub(10, 0) should return 10', () => {
        expect(mathmini.sub(10, 0)).to.equal(10);
    });
});
