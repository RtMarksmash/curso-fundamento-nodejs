const fs = require('fs');
const stream = require('stream');
const { ReadableStream } = require('stream/web');
const util = require('util')

let data = '';

let redableStream = fs.createReadStream(__dirname + '/texto.txt')
redableStream.setEncoding('utf8')

redableStream.on('data', function(chunk){
    data += chunk

})

redableStream.on('end', function(){
    console.log(data)
})


const Transformation = stream.Transform

function Mayus(){
    Transformation.call(this)
};

util.inherits(Mayus,Transformation);

Mayus.prototype._transform = function (chunk,codif,cb){
    const mayusChunk = chunk.toString().toUpperCase();
    this.push(mayusChunk);
    cb();

}

const mayus = new Mayus();

redableStream
.pipe(mayus)
.pipe(process.stdout)

