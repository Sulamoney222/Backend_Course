const {writeFile} = require('fs')
const {createReadStream} = require('fs')

// for (let index = 0; index < 1000; index++) {
//     writeFile(
//         './texts/big.txt', `Hello WORLD ${index}/n`,
//         {flag:'a'}
//     )
    
// }

const stream = createReadStream('./texts/big.txt')

stream.on('data', (result)=>{
    console.log(result.BYTES_PER_ELEMENT);
    
})
stream.on('error',())