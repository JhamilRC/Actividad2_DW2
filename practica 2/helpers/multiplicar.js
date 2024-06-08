const colors = require('colors');
const fs = require('fs');
console.log('=========================='.red)
console.log('||                      ||'.red);
console.log('=========================='.red)
const nume = 5;
const crearArchivo = (nume = 5) => {
    let salida = '';
    for (let i = 1; i <= 10; i++) {
        salida += `${num} x ${i} = =${num * i}\n`.green;
    }
    fs.writeFile(`salida.txt`, salida, (err) => {
        if (err) throw err;
        console.log('archivo creado exitosamente');
    })
}
module.exports={crearArchivo};