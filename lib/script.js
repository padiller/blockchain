/**
 * Change Estatus for Vehicle
 * @param {com.ibm.vehicle.polizaseguro.ChangeEstatus} ChangeEstatus
 * @transaction
 */
function changeEstatus(change) {
    var vehicle = change.vehicle
    vehicle.estatus = change.estatus
    return getAssetRegistry('com.ibm.vehicle.polizaseguro.Vehicle')
        .then(function(v) {
            return v.update(vehicle);
        });
}
