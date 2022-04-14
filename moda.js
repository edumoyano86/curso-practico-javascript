// const lista1 = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     4,
//     2,
//     2,
//     2,
//     1,
// ];


// const lista1Count = {};

// lista1.map(
//     function (elemento) {
//         if (lista1Count[elemento]) {
//             lista1Count[elemento] += 1;
//         } else {
//             lista1Count[elemento] = 1;
//         }
//     }
// );

// const lista1Array = Object.entries(lista1Count).sort(
//     function (elementoA, elementoB) {
//         return elementoA[1] - elementoB[1];
//     }
// )

// const moda = lista1Array[lista1Array.length - 1];



function calcularModa(listaUsuarios) {

    const listaUsuariosCount = {};

    listaUsuarios.map(
        function (elemento) {
            if (listaUsuariosCount[elemento]) {
                listaUsuariosCount[elemento] += 1;
            } else {
                listaUsuariosCount[elemento] = 1;
            }
        }
    );

    const listaUsuariosArray = Object.entries(listaUsuariosCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    )

    const moda = listaUsuariosArray[listaUsuariosArray.length - 1];

    return moda;

}