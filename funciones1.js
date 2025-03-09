function calcularSalario(nombre, horas) {
    let tarifaPorHora = horas <= 10 ? 30000 : 33000;
    let salario = horas * tarifaPorHora;
    return `Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`;
}

function solicitarDatos() {
    let nombre = prompt("Ingrese su nombre:");
    let horas = parseInt(prompt("Ingrese el número de horas trabajadas:"));
    
    if (!nombre || isNaN(horas) || horas <= 0) {
        alert("Por favor, ingrese datos válidos.");
        return;
    }
    
    let mensaje = calcularSalario(nombre, horas);
    alert(mensaje);
}

solicitarDatos();
