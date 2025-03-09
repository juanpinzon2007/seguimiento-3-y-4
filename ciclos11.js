let continuar = true;

while (continuar) {
    let modelo;

    while (!(modelo > 0)) {
        modelo = parseInt(prompt("Ingrese el número de modelo de su automóvil:"));
    }

    let defectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
    let mensaje = defectuosos.includes(modelo) 
        ? "El automóvil está defectuoso, llevar a garantía." 
        : "Su automóvil no está defectuoso.";

    alert(mensaje);

    continuar = confirm("¿Desea verificar otro modelo?");
}
