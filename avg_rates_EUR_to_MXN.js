/**
 * Calcula el importe ponderado en pesos de la divisa EUR para un periodo de tiempo
 * la información se obtiene de banxico
 * @author: jesus sanchez
 * @since: junio 2022

Ejemplo de llamada CURL a banxico:
Para probarlo nuevamente hay que generar un nuevo token
- Token: https://www.banxico.org.mx/SieAPIRest/service/v1/token
- API : https://www.banxico.org.mx/SieAPIRest/service/v1/doc/consultaDatosSerieRango

Call: Aqui se deben modificar los parametros de fechas + serie
curl https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF46410/datos/2022-05-04/2022-05-27 -H "Bmx-Token: 15742a094f2b508acdb0d6202710f9fec432ed163cfe0c83ed6988fb682ef14c"  - H "Content-Type: application/json"
 */

//el json es la info que regreso banxico
let jsonString = JSON.parse('{"bmx":{"series":[{"idSerie":"SF46410","titulo":"Cotización de las divisas que conforman la canasta del DEG Respecto al peso mexicano Euro","datos":[{"fecha":"04/05/2022","dato":"21.3239"},{"fecha":"05/05/2022","dato":"21.4341"},{"fecha":"06/05/2022","dato":"21.2879"},{"fecha":"09/05/2022","dato":"21.4245"},{"fecha":"10/05/2022","dato":"21.4996"},{"fecha":"11/05/2022","dato":"21.3643"},{"fecha":"12/05/2022","dato":"21.2110"},{"fecha":"13/05/2022","dato":"20.9249"},{"fecha":"16/05/2022","dato":"20.9546"},{"fecha":"17/05/2022","dato":"20.9908"},{"fecha":"18/05/2022","dato":"21.0035"},{"fecha":"19/05/2022","dato":"20.9898"},{"fecha":"20/05/2022","dato":"21.0348"},{"fecha":"23/05/2022","dato":"21.1686"},{"fecha":"24/05/2022","dato":"21.2970"},{"fecha":"25/05/2022","dato":"21.1579"},{"fecha":"26/05/2022","dato":"21.2145"},{"fecha":"27/05/2022","dato":"20.9673"}]}]}}');

//acumuladores de importes + dias
let totalDivisas = 0;
let numDias = jsonString.bmx.series[0].datos.length;

///recorremos los datos de las divisas por dia
for (let index = 0; index < numDias; index++) {
  //se parsen los datos
  let importe = +jsonString.bmx.series[0].datos[index].dato;
  let fecha = jsonString.bmx.series[0].datos[index].fecha;
  console.log(fecha + "    /    " + importe);
  totalDivisas += importe;
}

//se imprime el importe ponderado
console.log("avg in MXN: " + totalDivisas / numDias);

