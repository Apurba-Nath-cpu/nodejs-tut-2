const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
require('./7-mind-grenade');

// sayHi = utils.sayHi;
console.log(data);
sayHi(john)
sayHi(peter)
sayHi("Sussan");