# API-REST
API REST Generar, guardar y enviar códigos de descuento.

Con POST /codigos/newCode:{descuento}

{descuento} = Porcentaje del descuento

Example: curl -X http://localhost:3000/codigos/newCode:15

Response: json
{
  "description":":15% de descuento",
  "status":true, 
  "_id":"54d2be5050ff29621097bb39"
}

status: true // Codigo de descuento no usado.

