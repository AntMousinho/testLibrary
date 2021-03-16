const Matchers = require('./matchers')

const assertEquals = (val1, val2) => val1 === val2;

const expect = (actualOutput) => {
    return new Matchers(actualOutput);
}

const it = (testName, fn) => {
    console.log(`test: ${testName}`);
    try {
        fn();
    } catch(err) {
        console.log(err);
        throw new Error(`test run failed`);
    }
}

const describe = (suiteName, fn) => {
    try {
        console.log(suiteName);
        fn();
    } catch (err) {
        console.log(err.message);
    }
}

describe('a suite', () => {
    it('a test that will fail', () => {
        expect(true).toEqual(false);
    })

    it('a test that will never run', () => {
        expect(1).toEqual(1);
    })
})

describe('another suite', () => {
    it(`should succeed, true === true`, () => {
        expect(true).toEqual(true);
    })

    it(`should succeed, 1 === 1`, () => {
        expect(1).toEqual(1);
    })
})


module.exports = {
    assertEquals,
    expect, 
    it
}