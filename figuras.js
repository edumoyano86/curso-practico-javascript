// Codigo del cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
}
perimetroCuadrado()



// = ladoCuadrado * 4; 
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado (lado) {
    return lado * lado;
}
perimetroCuadrado()




// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Codigo del triángulo

console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triángulo miden: "
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     + "cm, "
//     + baseTriangulo
//     + "cm"
// );

// const alturaTriangulo = 5.5;

// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return (Number(lado1) + Number(lado2) + Number(base));
} 


// = ;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// = 
// console.log("El area del triángulo es: " + areaTriangulo + "cm^2");
 
console.groupEnd();

// Codigo del círculo

console.group("Círculo");

// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

function diametroCirculo(radio) {
    return radio * 2;
}

// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

const PI = Math.PI;
console.log("PI es:" + PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del círculo es: " + areaCirculo + "cm^2")

console.groupEnd();

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLadoUno");
    const value1 = input1.value;

    const input2 = document.getElementById("InputLadoDos");
    const value2 = input2.value;

    const input3 = document.getElementById("InputBase");   
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input3 = document.getElementById("InputBase");
    const value3 = input3.value;
    const input4 = document.getElementById("InputAltura");
    const value4 = input4.value;

    const area = areaTriangulo(value3, value4);
    alert(area);
}

function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}


// TRIANGULO ISÓSCELES


function alturaTrianguloIsosceles(ladoUno, ladoDos, base) {
    if (ladoUno == ladoDos && ladoUno != base) {
        return Math.sqrt((ladoUno * ladoDos)- ((base * base) / 4))
    } else {
        return alert("Los datos no corresponden a un triangulo isosceles")
    }
}

function calcularAlturaTrianguloIsosceles() {
    const inputAn = document.getElementById("InputLadoA");
    const valueAn = inputAn.value;

    const inputBn = document.getElementById("InputLadoB");
    const valueBn = inputBn.value;

    const inputBaseB = document.getElementById("InputBaseB");
    const valueBaseB = inputBaseB.value;

    const altura = alturaTrianguloIsosceles(valueAn, valueBn, valueBaseB);
    alert(altura);
}