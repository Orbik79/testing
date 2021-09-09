const { readFile, wtiteFile, writeFileSync, readFileSync } = require('fs');

readFileSync('./content/test.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(`err`, err)
        return
    }

    const testText = result
    console.log(`testText`, testText)

})

writeFileSync('./content/result-async.txt', 'Here is the result', { flag: 'a' })
