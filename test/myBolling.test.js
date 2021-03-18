const {firstThrew,secondThrew, scoreThrew} = require('../js/myBolling')

test('is less than 10', () => {
    expect(firstThrew()).toBeLessThanOrEqual(10);
});

test('is less than 10', () => {
    expect(secondThrew()).toBeLessThanOrEqual(9);
});

test('the sum of the first and second threw is less than 10', () => {
    secondThrew();
    expect(scoreThrew()).toBeLessThanOrEqual(10);
});

