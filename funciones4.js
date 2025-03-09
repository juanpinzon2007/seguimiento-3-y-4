function calcularRendimiento(fisica, quimica, biologia, matematicas, informatica) {
    let suma = fisica + quimica + biologia + matematicas + informatica;
    let porcentaje = (suma / 50) * 100;
    let calificacion;
    
    if (porcentaje < 60) {
        calificacion = "Mala";
    } else if (porcentaje <= 80) {
        calificacion = "Buena";
    } else {
        calificacion = "Excelente";
    }
    
    return `Tu porcentaje es ${porcentaje.toFixed(2)}% y tu calificación es ${calificacion}.`;
}

function solicitarCalificaciones() {
    let fisica = parseFloat(prompt("Ingrese la calificación de Física (0-10):"));
    let quimica = parseFloat(prompt("Ingrese la calificación de Química (0-10):"));
    let biologia = parseFloat(prompt("Ingrese la calificación de Biología (0-10):"));
    let matematicas = parseFloat(prompt("Ingrese la calificación de Matemáticas (0-10):"));
    let informatica = parseFloat(prompt("Ingrese la calificación de Informática (0-10):"));
    
    if ([fisica, quimica, biologia, matematicas, informatica].some(n => isNaN(n) || n < 0 || n > 10)) {
        alert("Por favor, ingrese calificaciones válidas entre 0 y 10.");
        return;
    }
    
    let mensaje = calcularRendimiento(fisica, quimica, biologia, matematicas, informatica);
    alert(mensaje);
}

solicitarCalificaciones();
