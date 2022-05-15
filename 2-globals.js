console.log(__dirname + "\n" + __filename);
setTimeout(() => {
    console.log("Timeout")
}, 1000)
setInterval(() => {
    console.log("Hello world");
}, 1000)