const sql = require("mssql");
const config = require("../config");

async function QueryIniciarSesion(usuario,contraseña) {
  let code = 200;
  let descripcion = "excelente";
  let resultData = null;

  try {
    const pool = await sql.connect(config);
    const request = pool.request();
    request.input('usuario', sql.NVarChar, usuario);
    request.input('contraseña', sql.NVarChar, contraseña);
    const result = await request.query('EXEC reserva.spr_IniciarSesion @usuario, @contraseña');

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
    QueryIniciarSesion: QueryIniciarSesion
};
