const calcularMCD = (a, b) => {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0){
        return "por favor, ingrese dos numeros enteros positivos."
    }
    a = Math.abs(a);
    b = Math.abs(b);
    while (b != 0){
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}
console.log(calcularMCD(4, 6));
console.log(calcularMCD(0, 12));
console.log(calcularMCD(12, 4));
console.log(calcularMCD(2, -18));