function cambiarNombre(){
    let nuevoNombre = prompt('Cambia tu nombre');
    document.getElementById("inicio").innerHTML = "Hola, "+ nuevoNombre;
}