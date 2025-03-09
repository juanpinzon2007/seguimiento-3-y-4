function determinarEstadoComputadora(pitido, discoGira) {
    if (pitido && discoGira) {
        return "Póngase en contacto con el técnico de apoyo";
    } else if (pitido && !discoGira) {
        return "Verificar contactos de la unidad";
    } else if (!pitido && !discoGira) {
        return "Traiga la computadora para repararla en la central";
    } else {
        return "Compruebe las conexiones de altavoces";
    }
}

function solicitarEstadoComputadora() {
    let pitido = confirm("¿La computadora emite un pitido al iniciar?");
    let discoGira = confirm("¿El disco duro gira?");
    
    let mensaje = determinarEstadoComputadora(pitido, discoGira);
    alert(mensaje);
}

solicitarEstadoComputadora();