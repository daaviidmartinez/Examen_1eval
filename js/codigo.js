//Definimos la zona de variables


var tiempo=[];

var mejorResult=0;
var peorResult=0;
var mediaResults=0;

var mjr=1000;
var peor=0;
var peor1=0;
var med=0;
var suma=0;


//Zona de funciones


function mejorTiemp() {
for (var k = 0; k < tiempo.length; k++) {
  if (tiempo[k]<mjr) {
    mjr=tiempo[k];
  }
}
mejorResult=mjr;
}
function peorTiemp() {
  for (var e = 0; e < tiempo.length; e++) {
    pe=tiempo[e]
    if (peor1>peor) {
      peor=peor1;
    }
  }
  peorResult=peor;
}




function mediaTiemp() {
  for (var i = 0; i < tiempo.length; i++) {
    suma= suma + tiempo[i];
  }
  media = suma / tiempo.length;
  mediaResults=media;

}

//Zona de while
while (true) {
  var pre1 = Number(prompt("Dime el tiempo en el entrenamiento"));
        if (pre1>0) {
           tiempo.push(pre1);
           console.log(pre1);
  }
    else{
        ((pre1=="SALIR") || (pre1=="salir"))
            alert("Saliste");
              mediaTiemp();
            break;
      }
  }

  mejorTiemp();
  peorTiemp();
  mediaTiemp();

  console.log(`El mejor tiempo ha sido: ${mejorTiemp}`);
  console.log(`El peor tiempo ha sido: ${peorTiemp}`);
  console.log(`La media de los tiempos ha sido de: ${mediaTiemp}`);
