import doSum from './math.js';

describe('MathClass Unit Test', () => {

	describe('when do sum', () => {

		it('shoud have sum value', () => {
			const mathClass = new doSum;
			expect(mathClass.doSum(2, 3)).to.eq(2+3);
		});

	});

});