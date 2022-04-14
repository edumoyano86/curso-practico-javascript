function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


// function ordenar(lista1) {

// const lista1 = [
//     20,
//     40,
//     30,
//     60,
// ];



// }
// const mitadLista1 = parseInt(ordenar().length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

// let mediana;

// if (esPar(ordenar().length)) {
//     const elemento1 = lista1[mitadLista1 - 1];
//     const elemento2 = lista1[mitadLista1];

//     const promedioElemento1y2 = calcularMediaAritmetica([
//         elemento1,
//         elemento2,
//     ]);

//     mediana = promedioElemento1y2;
// } else {
//     mediana = [mitadLista1]
// };

function calcularMediana(lista) {
    const listaOrdenada = lista.sort(function(a,b) {
        return a - b;
    });

    const mitadLista1 = parseInt(listaOrdenada.length / 2);

    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista1 - 1];
        const elemento2 = listaOrdenada[mitadLista1];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

        mediana = promedioElemento1y2;
    } else {
        mediana = listaOrdenada[mitadLista1];
    }
    return mediana
}