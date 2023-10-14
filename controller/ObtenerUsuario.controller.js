const Modelo = require('../models/Resultado.model');
const query = require('../models/ObtenerUsuario.model');

async function ControllerObtenerUsuario(req, res) {
  try {
    const { usuario} = req.body;

    const queryResult = await query.QueryObtenerUsuario(usuario);

    const datos = queryResult.datos;
    const datosUsuario = datos;
    const objModelo = new Modelo(queryResult.code, queryResult.descripcion, datosUsuario);
    return objModelo;
  } catch (error) {
    const errorController = error.message;
    const objModelo = new Modelo(400, errorController, null);
    return objModelo;
  }
}

async function Iniciar(req, res) {
  const mensaje = await ControllerObtenerUsuario(req, res);
  res.json(mensaje);
  res.end();
}

module.exports = {
  Iniciar: Iniciar,
};
