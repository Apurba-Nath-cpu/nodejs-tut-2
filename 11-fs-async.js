const { readFile, writeFile } = require('fs');

const asyncCall = (ind) => {
    console.log('start ' + ind);

    readFile('./content/first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const first = result;
        readFile('./content/second.txt', 'utf8', (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            const second = result;
            writeFile('./content/result-async.txt',
                `Here is the result: ${first}, ${second}`,
                (err, result) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    // console.log('Done');
                    readFile('./content/result-async.txt', 'utf8', (err, result) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        // console.log(result);
                        console.log('done with the task ' + ind);
                    });
                })
        })
    })
    console.log('starting another ' + ind);
}

for (let i = 1; i <= 10; i++) {
    asyncCall(i);
}