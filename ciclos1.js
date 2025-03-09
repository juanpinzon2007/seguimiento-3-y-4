let check = false;
let valorhoras = 30000;

while(check!= true){
    alert("introduzca entre estas opciones: \n1 trabajo menos de 10 horas o las mismas \n2 trabajo mas de 10 horas ");
    let opcion = Number(prompt("introduzca la opcion"));

switch(opcion){
    case 1:{
        let nombre= prompt("introduzca su nombre")
        let horas= prompt("introduzca el numero de horas que trabajo")
        alert(`bienvenido su nombre es ${nombre} y trabajo ${horas} horas su sueldo es ${valorhoras*horas}`);

    }
    break
    case 2:{
        let nombre= prompt("introduzca su nombre")
        let horas= prompt("introduzca el numero de horas que trabajo")
        alert(`bienvenido su nombre es ${nombre} y trabajo ${horas} horas su sueldo es ${valorhoras*horas}`);
    }
    break

    case 3:{
        (check=true) ; break;
    }


}    

}
