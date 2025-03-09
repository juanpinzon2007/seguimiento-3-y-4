function determinarParidad(numero) {
    return numero % 2 === 0 ? `El número ${numero} es par.` : `El número ${numero} es impar.`;
}

function solicitarNumero() {
    let numero = parseInt(prompt("Ingrese un número:"));
    
    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }
    
    let mensaje = determinarParidad(numero);
    alert(mensaje);
}

solicitarNumero();
