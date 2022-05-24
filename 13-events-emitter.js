const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age) => {
    console.log(`data recieved for ${name} of age ${age}`);
});

customEmitter.on('response', () => {
    console.log(`some other logic`);
});
console.log('stop-1');
customEmitter.emit('response', 'john', 34);
console.log('stop-2');