const test = require('../src/library');
const chalk = require('../src/chalk_format');

let result;
let success = () => console.log(chalk.success(`   Test passed`));

console.log(chalk.test(`1. Testing assert equals with equal value`));
result = test.assertEquals('hello', 'hello');
if(result) success();
else console.log(chalk.error('   Failed, values are equal, return false, expected true'));


console.log(chalk.test(`2. Testing assert equals with different value`));
result = test.assertEquals('hello', 'goodbye');
if(!result) success();
else console.log(chalk.error('   Failed, returns true, expected false'))


console.log(chalk.test(`3. expect().toEqual() with equal values`));
try {
    result = test.expect(15).toEqual(15);
    if(result === (chalk.success(`        ✅ Succeeded`))) success();
} catch {
    console.log(chalk.error('   Failed, values are equal, expected success message'))
}


console.log(chalk.test(`4. expect().toEqual() with non equal values`));
try {
    result = test.expect(15).toEqual('hello');
    if(result === (chalk.success(`        ✅ Succeeded`))) {
        console.log(chalk.error('   Failed, values are equal, expected success message'));
    }
} catch {
    success()
}

console.log(chalk.test('5. expect().toBeTruth with a truthy value'));
try {
    result = test.expect([]).toBeTruthy();
    if (result === chalk.success(`        ✅ Succeeded`)) success();
} catch {
    console.log(chalk.error('   Failed, values are equal, expected success message'))
}


console.log(chalk.test('6. expect.tobeTruthy() with a falsy value'));
try {
    result = test.expect('').toBeTruthy();
    if(result === chalk.success(`        ✅ Succeeded`)) {
        console.log(chalk.error('   Failed, value is not truthy'));
    }
} catch {
    success()
}
