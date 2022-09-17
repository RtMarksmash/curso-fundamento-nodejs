const fs = require('fs');


function leer(ruta,cb){
    fs.readFile(ruta, (err,data) => {
        cb(data.toString())
    })

};

leer(__dirname + '/text.txt', console.log)


function escribir(ruta,contenido,cb){
    fs.writeFile(ruta,contenido, (err)=>{
       if(err){
        console.log('hay un eror')
       }else{
        console.log('escritura exitosa')
       }
    })
}

function borrar(ruta,cb){
    fs.unlink(ruta, err =>{
        if(err){
            console.log('hay un error no se pudo borrar')
        }else{
            console.log('se pudo borrar')
        }
    })

}

borrar(__dirname + '/text1.txt')

//escribir(__dirname + '/text1.txt','soy un archivo nuevo',console.log)

