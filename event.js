
const {createReadStream} = require('fs')

const stream = createReadStream('./d.txt', {encoding: 'utf8'})

stream.on('data', (res) => {
    console.log(res)
})
