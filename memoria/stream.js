const fs = require('fs');

let data = '';

let redableStream = fs.createReadStream(__dirname + '/texto.txt')
redableStream.setEncoding('utf8')

redableStream.on('data', function(chunk){
    data += chunk

})

redableStream.on('end', function(){
    console.log(data)
})