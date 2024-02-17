//El prestigioso centro médico dental de Ñuñoa, le ha encargado la tarea de obtener información estadística acerca de las consultas dentales que realizó durante el día de ayer. Para esto, se le entregará un listado de las consultas realizadas, el que contiene una tabla con las siguientes columnas: hora de atención, médico especialista, nombre del paciente, Rut del paciente y previsión (Fonasa o Isapre).
//La información debe ser desplegada en una página HTML que usted debe crear. Puede utilizar la función document.write() y desplegar la información solicitada entre párrafos, o como usted estime conveniente, lo importante es que la información que se le solicite se muestre en dicha página que creará.
//Ejemplo: document.write('<p>Estadisticas centro médico ñuñoa</p>');

//Crear la estructura de datos mediante arreglos y objetos. Debe crear 1 arreglo por cada listado (Radiología, Traumatología y Dental) y 1 objeto por cada fila de información que contengan los listados, considerando las propiedades establecidas en la descripción.

//Definicion de las estructuras de datos
let radiologia = [{
    hora: "11:00",
    especialista: "Médico1",
    paciente: "Paciente1",
    rut: "12345678",
    prevision: "Isapre"
},
{
    hora: "10:00",
    especialista: "Médico2",
    paciente: "Paciente2",
    rut: "12345678",
    prevision: "Fonasa"
},
{
    hora: "12:00",
    especialista: "Médico3",
    paciente: "Paciente3",
    rut: "12345678",
    prevision: "Fonasa"
},
];
let traumatologia = [{
    hora: "10:00",
    especialista: "Médico4",
    paciente: "Paciente4",
    rut: "12345678",
    prevision: "Isapre"
},
{
    hora: "10:00",
    especialista: "Médico5",
    paciente: "Paciente5",
    rut: "12345678",
    prevision: "isapre"
},
{
    hora: "10:00",
    especialista: "Médico6",
    paciente: "Paciente6",
    rut: "12345678",
    prevision: "Fonasa"
}
];
let dental = [{
    hora: "10:00",
    especialista: "Médico7",
    paciente: "Paciente7",
    rut: "12345678",
    prevision: "Fonasa"
},
{
    hora: "10:00",
    especialista: "Médico8",
    paciente: "Paciente8",
    rut: "12345678",
    prevision: "Fonasa"
},
{
    hora: "10:00",
    especialista: "Médico9",
    paciente: "Paciente9",
    rut: "12345678",
    prevision: "Isapre"
}
];

   // Imprime la primera y última atención de cada listado
   document.write(`<p>Primera atención radiología: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención radiología: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}</p>`);
   document.write(`<p>Primera atención traumatología: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención traumatología: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}</p>`);
   document.write(`<p>Primera atención dental: ${dental[0].paciente} - ${dental[0].prevision} | Última atención dental: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}</p>`);

   // Recorre los arreglos y muestra el contenido en una tabla
   document.write("<table>");
   document.write("<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>");
   for (let i = 0; i < radiologia.length; i++) {
     document.write(`<tr><td>${radiologia[i].hora}</td><td>${radiologia[i].especialista}</td><td>${radiologia[i].paciente}</td><td>${radiologia[i].rut}</td><td>${radiologia[i].prevision}</td></tr>`);
   }
   for (let i = 0; i < traumatologia.length; i++) {
     document.write(`<tr><td>${traumatologia[i].hora}</td><td>${traumatologia[i].especialista}</td><td>${traumatologia[i].paciente}</td><td>${traumatologia[i].rut}</td><td>${traumatologia[i].prevision}</td></tr>`);
   }
   for (let i = 0; i < dental.length; i++) {
     document.write(`<tr><td>${dental[i].hora}</td><td>${dental[i].especialista}</td><td>${dental[i].paciente}</td><td>${dental[i].rut}</td><td>${dental[i].prevision}</td></tr>`);
   }
   document.write("</table>");





//Otra manera de hacerlo:
   //document.write("<table>");
   //document.write("<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>");
   //radiologia.forEach(atencion => {
     //document.write(`<tr><td>${atencion.hora}</td><td>${atencion.especialista}</td><td>${atencion.paciente}</td><td>${atencion.rut}</td><td>${atencion.prevision}</td></tr>`);
   //);
   //raumatologia.forEach(atencion => {
     //document.write(`<tr><td>${atencion.hora}</td><td>${atencion.especialista}</td><td>${atencion.paciente}</td><td>${atencion.rut}</td><td>${atencion.prevision}</td></tr>`);
   //});
   //dental.forEach(atencion => {
     //document.write(`<tr><td>${atencion.hora}</td><td>${atencion.especialista}</td><td>${atencion.paciente}</td><td>${atencion.rut}</td><td>${atencion.prevision}</td></tr>`);
   //});
 //document.write("</table>");

