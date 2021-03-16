const chalk = require('./chalk_format');

class Matchers {
    constructor(actualOutput) {
        this._actualOutput = actualOutput;
    }

    toEqual(expectedOutput) {
        if(this._actualOutput === expectedOutput) {
            console.log (chalk.success(`        ✅ Succeeded`));
        } else {
            throw new Error(`Fail - Actual: ${this._actualOutput}, Expected: ${expectedOutput}`);
        }
    }

    toBeTruthy() {
        if(this._actualOutput) {
            console.log (chalk.success(`    ✅ Succeeded`));
        } else {
            throw new Error(`Fail - Expected value to be truthy`)
        }
    }
}


module.exports = Matchers;