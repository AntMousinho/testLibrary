const chalk = require('./chalk_format');
const Matchers = require('./matchers')

const describe = (suiteName, fn) => {
    try {
        console.log("\n\n" + chalk.suite(suiteName));
        fn();
    } catch (err) {
        console.log(chalk.error(`[${err.message.toUpperCase()}]`));
    }
}

const it = (testName, fn) => {
    console.log(`   Test: ${chalk.test(testName)}`);
    try {
        fn();
    } catch(err) {
        console.log(`        ❌ ${chalk.error(err.stack)}`);
    }
}

const expect = (actualOutput) => {
    return new Matchers(actualOutput);
}

const assertEquals = (sum1, sum2) => sum1 === sum2;

module.exports = {
    describe,
    expect, 
    it,
    assertEquals
}
