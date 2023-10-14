require('dotenv').config();

//configuracion para la base de datos 
const config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER, //'172.16.4.222'
    database:process.env.DATABASE , // nombre de la base de datos
    options: {
        trustedconnection: true, // para la conexión local
        enableArithAbort: true,
        encrypt: false,
        instancename: process.env.INSTANCE// en caso se tenga alguna instancia
    }
}
module.exports = config; //exportamos la configuración


