const chalk = require('chalk');

const error = chalk.bold.red;

const success = chalk.bold.green;

const suite = chalk.magenta

const test = chalk.yellow

module.exports = {
    error,
    success,
    suite,
    test
}