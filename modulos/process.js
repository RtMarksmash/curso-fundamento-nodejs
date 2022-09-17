//const proceso = require('process')


process.on('exit', ()=>{
    console.log('el proceso esta terminado')
})


process.on('uncaughtException', (err , origen) => {
    console.log('se nos ha olvidado capturar el error');
    console.log(err)
})

noExisto();