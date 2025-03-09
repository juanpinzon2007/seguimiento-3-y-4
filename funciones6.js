function calcularAyuda(genero, edad) {
    let ayuda = 0;
    
    if (genero === "femenino") {
        if (edad > 50) {
            ayuda = 120000;
        } else if (edad >= 30) {
            ayuda = 100000;
        }
    } else if (genero === "masculino") {
        ayuda = 40000;
    }
    
    return `El valor de ayuda mensual es: $${ayuda}`;
}

function solicitarDatos() {
    let genero = prompt("Ingrese su género (femenino/masculino):");
    let edad = parseInt(prompt("Ingrese su edad:"));
    
    if (!genero || isNaN(edad)) {
        alert("Por favor, ingrese datos válidos.");
        return;
    }
    
    let mensaje = calcularAyuda(genero, edad);
    alert(mensaje);
}

solicitarDatos();
