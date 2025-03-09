let continuar = true;

while (continuar) {
    let pitido = prompt("¿La computadora emite un pitido al iniciar? (si/no)");
    while (pitido !== "si" && pitido !== "no") {
        pitido = prompt("¿La computadora emite un pitido al iniciar? (si/no)");
    }

    let discoGira = prompt("¿El disco duro gira? (si/no)");
    while (discoGira !== "si" && discoGira !== "no") {
        discoGira = prompt("¿El disco duro gira? (si/no)");
    }

    let mensaje = pitido === "si" 
        ? (discoGira === "si" ? "Póngase en contacto con el técnico de apoyo." : "Verificar contactos de la unidad.") 
        : (discoGira === "si" ? "Compruebe las conexiones de altavoces." : "Traiga la computadora para repararla en la central.");

    alert(mensaje);

    continuar = confirm("¿Quieres realizar otra verificación?");
}
