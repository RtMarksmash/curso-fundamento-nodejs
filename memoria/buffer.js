//let buffer = Buffer.alloc(4)
//let buffer = Buffer.from([1,4,6])

let buffer = Buffer.from('jorge mario mora')

console.log(buffer.toString())


let abc = Buffer.alloc(26);

console.log(abc)

for(i = 0 ; i < 26 ; i++){
    abc[i] = i + 97
}

console.log(abc.toString())