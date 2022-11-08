const sumOfArray = require('./index');
const solution = require('./system/solution');
const { getRandomInt } = require('./system/environment');

test('Функция должна вернуть число', () => {
	const type = typeof sumOfArray([1, 2, 3, 4, 5]);

	expect(type).toBe('number');
});

test('Тест. arr: [1, 2, 3, 4, 5]', () => {
	const res = sumOfArray([1, 2, 3, 4, 5]);

	expect(res).toBe(15);
});

test('Тест. arr: []', () => {
	const res = sumOfArray([]);

	expect(res).toBe(0);
});

test('Тест. arr: [9]', () => {
	const res = sumOfArray([9]);

	expect(res).toBe(9);
});

test('Тест. arr: [6, 8, 3, 1]', () => {
	const res = sumOfArray([6, 8, 3, 1]);

	expect(res).toBe(18);
});

test('Тест. arr: [2, 5, 7, 8, 8]', () => {
	const res = sumOfArray([2, 5, 7, 8, 8]);

	expect(res).toBe(30);
});

test('Тест. arr: [1, 4, 2, 9, 4, 1, 1, 2, 4, 7, 0]', () => {
	const res = sumOfArray([1, 4, 2, 9, 4, 1, 1, 2, 4, 7, 0]);

	expect(res).toBe(35);
});

test('Auto: random outcomes', () => {
	let failed = false;

	const getArr = () => {
		let arr = [];
		const iterations = getRandomInt(0, 40);

		for (let i = 0; i < iterations; i++) {
			arr.push(getRandomInt(0, 9));
		}

		return arr;
	};

	for (let i = 0; i < 100; i++) {
		const arr = getArr();

		if (solution(arr) !== sumOfArray(arr)) {
			failed = 'failed';
			break;
		}
	}

	expect(failed).not.toBe('failed');
});