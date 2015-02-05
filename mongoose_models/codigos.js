var mongoose  = require ('mongoose'),
    Schema    = mongoose.Schema;

var codigosSchema = new Schema({
  description: {type: String, require: true},
  status: {type: Boolean, require: true}
});

module.exports = mongoose.model( 'codigo', codigosSchema );