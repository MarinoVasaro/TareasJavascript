
let edad = parseInt(prompt("Ingresa tu edad"));
if(edad < 15){
    alert("No puedes entrar")
    location.href ="http://www.google.com";
    
}
if(edad >= 18){
    alert("Puedes entrar a comprar")

function total(){
    let producto = prompt("Ingrese el valor del producto");
        producto = producto * 1.21;
    let descuento = prompt('ingrese su descuento');
    let precioFinal = (producto - descuento);   
    alert("El precio final de su preducto, sumado el iva y realizado el descuento es de "+ "$" + precioFinal);
}
}

total();


//Esto es para ejecutar en el VS con un ejemplo de un ciclo.

for(let i = 0; i < 100; i = i+2){
    if(i === 50){
        continue;
    }
    console.log('Numeros pares del 0 al 100 menos el cincuenta', i);
}



