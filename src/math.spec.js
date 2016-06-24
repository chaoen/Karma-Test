import doSum from './math.js';

describe('Testing', () => {

	describe('when do sum', () => {

		it('shoud have same value', () => {
			const mathClass = new doSum;
			expect(mathClass.doSum(2, 3)).to.eq(2+3);
		});

	});

});