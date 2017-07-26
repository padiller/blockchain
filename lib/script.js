'use strict';

/*eslint-disable no-unused-vars*/
/*eslint-disable no-undef*/

/**
 * Actualizar una poliza
 * @param {com.ibm.seguros.Actualizar} Actualizar
 * @transaction
 */
function actualizar(change) {
    var poliza = change.poliza
	poliza.tipoPoliza = change.tipoPoliza
  	poliza.placa = change.placa
  	poliza.fechaInicio = change.fechaInicio
  	poliza.fechaFin = change.fechaFin
	poliza.estatusPoliza = change.estatusPoliza
    return getAssetRegistry('com.ibm.seguros.Poliza')
        .then(function(v) {
            return v.update(poliza);
        });
}

/*eslint-enable no-unused-vars*/
/*eslint-enable no-undef*/
