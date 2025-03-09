function encontrarMayor(num1, num2, num3) {
    let mayor;
    
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }
    
    return `El número mayor es: ${mayor}`;
}

function solicitarNumeros() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let num3 = parseFloat(prompt("Ingrese el tercer número:"));
    
    if ([num1, num2, num3].some(n => isNaN(n))) {
        alert("Por favor, ingrese números válidos.");
        return;
    }
    
    let mensaje = encontrarMayor(num1, num2, num3);
    alert(mensaje);
}

solicitarNumeros();
