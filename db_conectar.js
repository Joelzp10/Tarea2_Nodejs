import mysql from 'mysql'
var conectar = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'UMG22057.',
database : 'db_estudiantesumg'
});
conectar.connect( function(err){
    if(err){
        console.error('Error en la conexion'+err.stack)
        return;
    }
    console.log('Conexion exitosa ID: '+conectar.threadId);
});
export {conectar}