const test = require('../library');

let result;

console.log(`1. assertEquals with same values`)
console.log(test.assertEquals(2, 2));

console.log(`2. assertEquals with different values`)
console.log(!test.assertEquals(2, 4))

console.log(`3. expect toEqual, same values`)
result = test.expect('hello').toEqual('hello');
console.log(test.assertEquals(result, `Succeeded`))

console.log(`4. expect toEqual, different values`)
result = test.expect('hello').toEqual(`world`);
console.log(test.assertEquals(result, `Fail - Actual: hello, Expected: world`))

console.log(`5. expect toBeTruthy. truthy value`)
result = test.expect([]).toBeTruthy();
console.log(test.assertEquals(result, `Succeeded`));

console.log(`6. expect toBeTruthy, not truthy value`);
result = test.expect('').toBeTruthy();
console.log(test.assertEquals(result, `Fail - Expected value to be truthy`))

