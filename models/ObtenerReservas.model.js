const sql = require("mssql");
const config = require("../config");

async function QueryObtenerReservas(usuario) {
  let code = 200;
  let descripcion = "excelente";
  let resultData = null;

  try {
    const pool = await sql.connect(config);
    const request = pool.request();
    request.input('usuario', sql.NVarChar, usuario);
    const result = await request.query('EXEC reserva.spr_ObtenerReservas @usuario');

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
    QueryObtenerReservas: QueryObtenerReservas
};
