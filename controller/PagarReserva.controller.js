const Modelo = require('../models/Resultado.model');
const query = require('../models/PagarReserva.model');

async function ControllerIniciarSesion(req, res) {
  try {
    const { reserva_id} = req.body;

    const queryResult = await query.QueryPagarReserva(reserva_id);

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
