let nombre= String(prompt("Ingrese nombre del alumno:"));
let cant_notas= Number(prompt("Cantidad total de notas a ingresar:"));
let suma=0;

function promedio(suma_notas, total_notas){

    let resultado= suma_notas/total_notas;
    return resultado;
  
}

for (let i = 1; i <= cant_notas; i++) {

    let nota= Number(prompt("Ingrese la nota numero " + i + " (notas entre 1 y 10):"));
        while(nota<0 || nota>10){
            nota= Number(prompt("LA NOTA DEBE SER ENTRE 1 Y 10! Ingrese la nota numero "+ i + ":"));
        }
    
    suma+=nota;
    console.log("nota " + nota);
}

let promedio_notas=promedio(suma,cant_notas);

if ( promedio_notas >= 5 ) {
    alert("Felicidades "+ nombre + "! APROBASTE el curso con nota: " + promedio_notas);
}else{
    alert("Lo lamentamos "+ nombre + ", REPROBASTE el curso con nota: " + promedio_notas);
}