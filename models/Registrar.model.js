const sql = require("mssql");
const config = require("../config");

async function QueryRegistrar(nombre,ape_paterno,ape_materno,usuario,contraseña,correo,dni) {
  let code = 200;
  let descripcion = "excelente";
  let resultData = null;

  try {
    const pool = await sql.connect(config);
    const request = pool.request();
    request.input('nombre', sql.NVarChar, nombre);
    request.input('ape_paterno', sql.NVarChar, ape_paterno);
    request.input('ape_materno', sql.NVarChar, ape_materno);
    request.input('correo', sql.NVarChar, correo);
    request.input('usuario', sql.NVarChar, usuario);
    request.input('contraseña', sql.NVarChar, contraseña);
    request.input('dni', sql.NVarChar, dni);
    const result = await request.query('EXEC reserva.spr_RegistrarUsuario  @usuario, @contraseña, @nombre ,@ape_paterno,@ape_materno,@correo,@dni');

    // Verifica la estructura del resultado y ajusta esto según sea necesario
    if (result.recordset && result.recordset.length > 0) {
      resultData = result.recordset;
    } else {
      descripcion = "sin resultados";
    }

    await sql.close();
  } catch (error) {
    code = 500; // Error interno del servidor
    descripcion = error.message;
  }
  
  return {
    code: code,
    descripcion: descripcion,
    datos: resultData,
  };
}

module.exports = {
    QueryRegistrar: QueryRegistrar
};
