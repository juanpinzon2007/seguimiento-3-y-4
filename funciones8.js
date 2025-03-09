function esTrianguloValido(angulo1, angulo2, angulo3) {
    return angulo1 + angulo2 + angulo3 === 180;
}

function solicitarAngulos() {
    let angulo1 = parseInt(prompt("Ingrese el primer ángulo del triángulo:"));
    let angulo2 = parseInt(prompt("Ingrese el segundo ángulo del triángulo:"));
    let angulo3 = parseInt(prompt("Ingrese el tercer ángulo del triángulo:"));
    
    let mensaje = esTrianguloValido(angulo1, angulo2, angulo3) ? 
        "Los ángulos ingresados forman un triángulo válido." : 
        "Los ángulos ingresados NO forman un triángulo válido.";
    
    alert(mensaje);
}

solicitarAngulos();
