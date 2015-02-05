var express = require('express');
var router = express.Router();
var codigo =require('../mongoose_models/codigos');

/* GET Generar y guardar descuento en MongoDB */
router.post('/newCode/:porcentaje', function(req, res, next) {
	var contenido = new codigo({
			description: req.params.porcentaje + '% de descuento',
			status: true // (True) Descuento no usado
		});
		contenido.save(function(err) {
	  	if (err)
	  		console.log('No se pudo guardar el descuento \n Error: ' + err);
	  	else
	 		console.log('Descuento guardado');
	 		//console.log(contenido);
	 		res.json(contenido);
	});

});
router.post('/updateCode/:id', function(req, res, next) {
	var contenido = new codigo({
			description: req.params.status + 'status',
			status: false // (True) Descuento no usado
		});
		contenido.update(function(err) {
	  	if (err)
	  		console.log('No se pudo guardar el descuento \n Error: ' + err);
	  	else
	 		console.log('Descuento guardado');
	 		//console.log(contenido);
	 		res.json(contenido);
	});

});

module.exports = router;
