//declaracion de variables

let ingreso
let costo;
let producto;
let precioSinDescuento
let codigoDescuento = 544312; //10%


//constructor de objetos.
class compra {
    constructor(producto, costo){
        this.producto = producto,
        this.costo = costo
    }
}

//array para guardar las compras.
var arr = []


//ciclo repetitivo de preguntas al usuario sobre su compra.
for (let i = 0; i < 3; i++) {
    let ingreso = prompt(`Ingresar producto al carrito \n 1- Invictus Pacco Rabanne \n 2- Invitus one millon  \n 3-Carolina Herrera VIP`);
    if (ingreso == 1){
        costo = 11200;
        producto = "Invictus Pacco Rabanne";
        descuento()
    } else if (ingreso == 2){
        costo = 12400;
        producto = "Invitus one millon";
        descuento()
    } else if (ingreso == 3){
        producto = "Carolina Herrera VIP";
        costo = 9800;
        descuento()
    } else {
        alert("Opcion incorrecta")
    }
    //objeto finalizado.
    var objeto1 = new compra(producto, costo)
    arr.push(objeto1)
    alert(`Su ${objeto1.producto} cuesta ${objeto1.costo}`)
}

//alerta de las 3 compras.
for (let i = 0; i < arr.length; i++){
    alert(`OBJETO ${i+1} \n PRODUCTO ${arr[i].producto} \n PRECIO ${arr[i].costo}`)
}


//funcion para aplicar 10% de descuento.
function descuento(){
    let descuento = prompt("Posee algun descuento?")
    if (descuento == 'si' || (descuento) == "SI" || (descuento) == "Si"){
        let ingresoDescuento = parseInt(prompt("Ingrese codigo"))
        if (ingresoDescuento == codigoDescuento){
            alert("Su codigo ha sido aceptado! 10%")
            precioSinDescuento = costo * 0.10;
            costo = costo - precioSinDescuento;
            // alert(`El ${producto} cuesta $${costo}`)
        } else {
            alert('codigo invalido')
        }
    } else if (descuento == 'no' || descuento == "NO" || descuento == "No"){
        // alert(`El ${producto} cuesta $${costo}`)
    }
    else {
        alert("Opcion incorrecta")
    }
}

//precio final de todos los objetos

let precioTotal = arr.reduce((acc, e) => acc + e.costo, 0)
alert(`El precio final es de su compra es de $${precioTotal}`)


// DOM
let pagar = document.getElementById("pagar")
for (const i of arr) {
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<h2>${i.producto}</h2>
                            <p>${i.costo}</p>`
    pagar.append(contenedor)
}

let mensajePrecioTotal = document.createElement("h3")
mensajePrecioTotal.innerText = `El costo total es de ${precioTotal}`
pagar.append(mensajePrecioTotal)

// EVENTO SECCION pagar
let botonPagar = document.getElementById("botonPagar");
botonPagar.addEventListener("click",clickpagar);
function clickpagar(){
    alert("Gracias por su compra de" + " " +precioTotal + "!");
}
