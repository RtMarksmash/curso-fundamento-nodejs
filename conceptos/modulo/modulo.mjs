import { isModuleNamespaceObject } from "util/types";

function saludar(nombre){
    console.log(`hola como estas ${nombre}`);

}

function sumar (a,b){
    return a + b
}


export default saludar();