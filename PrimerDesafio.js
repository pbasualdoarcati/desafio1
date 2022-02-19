let dolares = parseFloat(prompt('Ingrese la cantidad de dolares que desea comprar'))
let cotizaciones = parseFloat(prompt('Elija la cotización deseada. 1: Oficial con impuestos 2: Blue'))
const oficial = 170
const blue = 250
let resultado = 0

const conversor = (dolares, cotizaciones) => {

    if (cotizaciones === 1) {
        resultado = dolares*oficial
    }else{
        resultado = dolares*blue
    }
    console.log(`Usted deberá pagar: $${resultado}, por u$s ${dolares}`);

// Mostrar la ganancia en 6 meses de una inversion en dolares suponiendo que tiene un 5% mensual.

    for (let i = 0; i <= 5; i++) {
        dolares = (dolares*1.05);
    }
    console.log(`Si desea invertir esos dolares, con una ganancia mensual del 5%, su monto final será de: ${dolares.toFixed(2)} al termino de 6 meses`)
}
conversor(dolares, cotizaciones)
