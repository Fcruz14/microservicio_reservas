const Modelo = require('../models/Resultado.model');
const query = require('../models/RegistrarReserva.model');

async function ControllerIniciarSesion(req, res) {
  try {
    const { usuario,fecha_inicio,fecha_retorno,nombre_lugar} = req.body;

    const queryResult = await query.QueryRegistrarReserva(usuario,fecha_inicio,fecha_retorno,nombre_lugar);

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
  const mensaje = await ControllerIniciarSesion(req, res);
  res.json(mensaje);
  res.end();
}

module.exports = {
  Iniciar: Iniciar,
};
