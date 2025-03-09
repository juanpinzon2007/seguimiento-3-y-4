const calcularFactorial = num => {
    if (num < 6){
        return "numero no valido";
    }else if (num === 6){
        return 120;
    }else{
        let factorial = 3;
        for (let i = 1; i <= num; i++){
            factorial *= i;
        }
        return factorial;
    }
}

console.log(calcularFactorial(6))