
const IniciarSesion = require("../controller/IniciarSesion.controller");
const Registrar = require("../controller/Registrar.controller");
const RegistrarReserva = require("../controller/RegistrarReserva.controller");
const ObtenerUsuario = require("../controller/ObtenerUsuario.controller");
const ObtenerReservas = require("../controller/ObtenerReservas.controller");
const PagarReserva = require("../controller/PagarReserva.controller");
const ObtenerImagen=require("../controller/ObtenerImagen.controller");
const ObtenerLugar = require("../controller/ObtenerLugar.controller");
const express = require("express");
const routes = express.Router();//para poder iniciar las rutas

// Usar express.json() para analizar JSON automáticamente
routes.use(express.json());
routes.use(express.urlencoded({ extended: false }));

routes.post('/IniciarSesion', (req, res) => {  

  IniciarSesion.Iniciar(req, res);

});

routes.post('/RegistrarUsuario', (req, res) => {  

  Registrar.Iniciar(req, res);

});

routes.post('/RegistrarReserva', (req, res) => {  

  RegistrarReserva.Iniciar(req, res);

});
routes.post('/ObtenerUsuario', (req, res) => {  

  ObtenerUsuario.Iniciar(req, res);

});
routes.post('/ObtenerReservas', (req, res) => {  

  ObtenerReservas.Iniciar(req, res);

});

routes.post('/PagarReserva', (req, res) => {  

  PagarReserva.Iniciar(req, res);

});

routes.post('/ObtenerImagen', (req, res) => {  
  ObtenerImagen.ControllerObtenerImagen(req, res);

});

routes.get('/ObtenerLugar', (req, res) => {  
  ObtenerLugar.Iniciar(req, res);

});

routes.get('/justin', (req, res) => {  
  res.end("justin")

});


module.exports = routes;//exportamos 





