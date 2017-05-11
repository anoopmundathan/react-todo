import {partial, pipe} from './util';

const add = (a, b) => a + b;
const addThree = (a, b, c) => a + b + c;

const inc = (num) => num + 1;
const dbl = (num) => num * 2;

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

test('pipe passes result of inc to incDbl', () => {
    const pipeline = pipe(inc, dbl);
    const result = pipeline(2);
    expect(result).toBe(6);
});

test('pipe passes result of inc to incDbl', () => {
    const pipeline = pipe(dbl, inc);
    const result = pipeline(3);
    expect(result).toBe(7);
});

test('pipe passes result of inc to incDbl', () => {
    const pipeline = pipe(dbl, inc);
    const result = pipeline(3);
    expect(result).toBe(7);
});

test('pipe works with more than two functions', () => {
    const pipeline = pipe(add, inc, dbl, inc);
    const result = pipeline(4, 5); //inc(dbl(inc(add(4, 5))))
    expect(result).toBe(21);
});
