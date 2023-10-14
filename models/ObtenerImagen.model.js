const sql = require("mssql");
const config = require("../config");

async function QueryObtenerReservas(n) {
  let code = 200;
  let descripcion = "excelente";
  let resultData = null;

  try {
    const pool = await sql.connect(config);
    const request = pool.request();
    request.input('n', sql.Int, n);
    const result = await request.query('EXEC reserva.spr_ObtenerImagen @n');

    // Verifica la estructura del resultado y ajusta esto según sea necesario
    if (result.recordset && result.recordset.length > 0) {
      resultData = result.recordset[0].ImagenLugar;
    } else {
      code = 404; // Cambia el código de respuesta a 404 si no se encuentra la imagen
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
