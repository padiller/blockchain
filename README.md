# IBM - Pólizas de Seguros Blockchain

Repositorio de pólizas para uso por parte de agentes de tránsito.

## Modelo

### Assets

Póliza

* polizaId - Identificador de la póliza.
* aseguradora - Compañía aseguradora.
* tipoPoliza - El tipo de póliza (estándar, amplia, personalizada).
* vin - Número que identifica el coche asegurado.
* placa - Placas del coche asegurado.
* fechaInicio - Fecha en la que inició la cobertura.
* fechaFin - Fecha en la que acaba la cobertura.
* estatusPoliza - El estatus en el que se encuentra la póliza (activa, vencida).
* titular - El titular de la póliza (nombre, apellidos, teléfono).

### Participants

Aseguradora

* aseguradoraId - Identificador de la aseguradora.
* nombre - Nombre de la aseguradora.

Policía

* policiaId - Identificador del policía.
* nombre - Nombre del policía.

### Transactions

Actualizar

* tipoPoliza - El tipo de póliza (estándar, amplia, personalizada).
* placa - Placas del coche asegurado.
* fechaInicio - Fecha en la que inició la cobertura.
* fechaFin - Fecha en la que acaba la cobertura.
* estatusPoliza - El estatus en el que se encuentra la póliza (activa, vencida).

## Access Control

ReglaAseguradoras

* Acceso total a pólizas propias.

ReglaPolicia

* Acceso a lectura de todas las pólizas.

## Autores

[*Joel Lara*](https://github.com/joellara)
[*Luis Padilla*](https://github.com/padiller)


