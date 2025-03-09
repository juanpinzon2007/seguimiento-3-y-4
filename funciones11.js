function verificarModeloDefectuoso(modelo) {
    let modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
    return modelosDefectuosos.includes(modelo) 
        ? "El automóvil está defectuoso, llevar a garantía"
        : "Su automóvil no está defectuoso";
}

function solicitarModelo() {
    let modelo = parseInt(prompt("Ingrese el número de modelo de su automóvil:"));
    let mensaje = verificarModeloDefectuoso(modelo);
    alert(mensaje);
}

solicitarModelo();
