class Matchers {
    constructor(actualOutput) {
        this._actualOutput = actualOutput;
    }

    toEqual(expectedOutput) {
        if(this._actualOutput === expectedOutput) {
            return  `Succeeded`
        } else {
            throw new Error(`Fail - Actual: ${this._actualOutput}, Expected: ${expectedOutput}`);
        }
    }

    toBeTruthy() {
        if(this._actualOutput) {
            return `Succeeded`
        } else {
            console.log(`Fail - Expected value to be truthy`);
            throw new Error(`Fail - Expected value to be truthy`)
        }
    }
}

module.exports = Matchers;