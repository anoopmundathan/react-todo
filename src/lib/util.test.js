import {partial} from './util';

const add = (a, b) => a + b;
const addThree = (a, b, c) => a + b + c;

test('partial applies the first argument ahead of time', () => {
    const inc = partial(add, 2);
    const result = inc(1);
    expect(result).toBe(3);
});

test('partial applies the first argument ahead of time', () => {
    const inc = partial(addThree, 2, 3);
    const result = inc(2);
    expect(result).toBe(7);
});
