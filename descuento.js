// const precioOriginal = 100;

// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

const cupones = [
    {
        name: "instagram",
        discount: 25,
    },
    {
        name: "facebook",
        discount: 20,
    },
    {
        name: "email",
        discount: 15,
    },
];

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value

    // const inputDiscount = document.getElementById("InputDiscount");
    // const discountValue = inputDiscount.value

    const inputCupon =document.getElementById("InputCupon");
    const cuponValue = inputCupon.value

    let descuento;

    const isCuponValueValid = function(cupon) {
        return cupon.name === cuponValue;
    };

    const userCupon = cupones.find(isCuponValueValid);

    if (!userCupon) {
        alert("El cupón " + cuponValue + " no es válido");
    } else {
        const descuento = userCupon.discount;
        const precioConDescuento =  calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    }

    // const precioConDescuento =  calcularPrecioConDescuento(priceValue, discountValue);

    

    

}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })