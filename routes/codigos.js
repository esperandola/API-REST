var express = require('express');
var router = express.Router();
var codigo =require('../mongoose_models/codigos');

/* POST Generar y guardar descuento en MongoDB */
router.post('/newCode/:porcentaje', function(req, res, next) {
	var contenido = new codigo({
			description: req.params.porcentaje + '% de descuento',
			status: true // (True) Descuento no usado
		});
		contenido.save(function(err) {
	  	if (err)
	  		console.log('No se pudo guardar el descuento \n Error: ' + err);
	  	else
	 		console.log('Descuento guardado \n');
	 		//console.log(contenido);
	 		res.json(contenido);
	});

});

// PATCH actualizar status = false (Descuento utilizado)

router.patch('/updateCode/:id', function(req, res, next) {
	// Buscamos el descuendo por su object id
	codigo.findById(req.params.id, function (err, query) {
    	query.update({ status: false }).exec(); // Unicamente actualizamos su status (Descuento usado)

	});
	res.send('Descuento actualizado \n');
});


module.exports = router;
