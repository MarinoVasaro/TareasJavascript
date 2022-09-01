// function descuento() {
//     let descuento = prompt('Tiene codigo de descuento?')
//         if (descuento == 'si'|| (descuento) == 'SI' || (descuento) =='Si'){
//             let ingreseCodigo = parseInt(prompt('Ingrese el codigo'))
//             if (ingreseCodigo = descuento){
//                 alert('CODIGO ACEPTADO CORRECTAMENTE, 15% DESCUENTO')
//                 porcentaje = precio / 0.15;
//                 precio = (precio - porcentaje);
//             }
//         else{
//             alert('codigo incorrecto')
//         }
//     }
//         else if (descuento == 'no'|| (descuento) == 'NO' || (descuento) =='No'){
//             alert('Opcion Incorrecta.')
//         } 
//     }

//DECLARACION DE VARIABLES VACIAS

let eleccion;
let precio
let producto;
const descuento = 544312;

//CONSTRUCTOR
class usuario{
    constructor(producto, precio){
        this.producto = producto,
        this.precio = precio
    }
}

for (let i = 0; i < 2; i++){
    let eleccion = prompt('Ingrese el perfume deseado \n 1- Paco Rabanne-Invictus \n 2- Paco Rabanne-One Millon \n 3- Carolina Herrera-VIP');
    if (eleccion == 1){
        precio = '$' + 12500;
        producto = 'Paco Rabanne-Invictus';
        descuento()
    }
    else if (eleccion == 2){
        precio = '$' + 11350;
        producto = 'Paco Rabanne-Invictus';
        descuento()
    }
    else if (eleccion == 3){
        precio = '$' + 14200;
        producto = 'Paco Rabanne-Invictus';
        descuento()
    }
    else{
        alert('Su eleccion es incorrecta o no se encuentra en stock, porfavor coloque el numero de las opciones.')
    }
    //Push al array (datos)
        var compra1 = new usuario (producto, precio);
        datos.push(compra1) 
        alert(`Su ${compra1.producto} cuesta ${precio}`)
}

//ARRAY PARA GUARDAR LOS DATOS DEL USUARIO CON UN PUSH
var datos = []


