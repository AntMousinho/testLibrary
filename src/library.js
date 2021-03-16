const chalk = require('./chalk_format');
const Matchers = require('./matchers')

const describe = (suiteName, fn) => {
    try {
        console.log("\n" + chalk.suite(suiteName));
        fn();
    } catch (err) {
        console.log(chalk.error(`[${err.message.toUpperCase()}]`));
    }
}

const it = (testName, fn) => {
    console.log(`   test: ${chalk.test(testName)}`);
    try {
        fn();
    } catch(err) {
        console.log(`        ❌ ${chalk.error(err)}`);
    }
}

const expect = (actualOutput) => {
    return new Matchers(actualOutput);
}

const assertEquals = (sum1, sum2) => sum1 === sum2;


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
    describe,
    expect, 
    it,
    assertEquals
}