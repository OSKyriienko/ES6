let arg1 = process.argv[2];
let arg2 = process.argv[3];

import data from './module_default';

console.log(data.PI);
console.log(data.sqrt(+arg1));
console.log(data.square(+arg2));