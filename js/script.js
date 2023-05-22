    let cantidadDeSueldos = parseInt(prompt("Cuantos sueldos se van a sumar?"));
    let valorHora = parseInt(prompt("Que valor tiene la hora trabajada?"));
    let feriados = parseInt(prompt("Ingrese la cantidad de dias feriados trabajados"));


function sumarTotalSueldos () {

    let totalSueldoMensual = valorHora * 200;
    let feriadoCobraDoble = (valorHora * 8) * feriados;
    let totalSueldos = (totalSueldoMensual + feriadoCobraDoble) * cantidadDeSueldos;

    if (feriados == 0) {
        let bono = 5000;
        totalSueldos = (totalSueldoMensual + bono) * cantidadDeSueldos;
        alert("El total a pagar de sueldos mas un bono incluido es de " + totalSueldos);
    } else {
        alert("El total a pagar de sueldos mas feriados incluidos es de " + totalSueldos);
    }

    console.log ("El total a pagar es de " + totalSueldos);

}
sumarTotalSueldos()
