const A = require('./globalA'); // global.require()

global.message = '안녕하세요';
console.log(A());
console.log(Object.entries(global)); // global.console()