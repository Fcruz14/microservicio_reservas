const Modelo = require('../models/Resultado.model');
const query = require('../models/ObtenerImagen.model');

async function ControllerObtenerImagen(req, res) {
  try {
    const { n } = req.body;
    const queryResult = await query.QueryObtenerReservas(n);

    if (queryResult.code === 200) {
      const datos = queryResult.datos;
      res.setHeader('Content-Type', 'image/jpeg'); // Cambia el tipo MIME según corresponda
      res.send(datos);
    } else {
      res.status(queryResult.code).json({
        error: queryResult.descripcion
      });
    }
  } catch (error) {
    const errorController = error.message;
    const objModelo = new Modelo(400, errorController, null);
    return objModelo;
  }
}

module.exports = {
    ControllerObtenerImagen: ControllerObtenerImagen,
};
