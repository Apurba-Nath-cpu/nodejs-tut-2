const os = require('os');

// Info about user
const user = os.userInfo();
// Method returns system uptime
console.log(user);
console.log(`The system Uptime is: ${os.uptime()} seconds`);
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);