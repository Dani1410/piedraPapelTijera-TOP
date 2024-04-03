function getPcChoice() {
    let numberRandomPc = Math.floor(Math.random() * 3) + 1;
    console.log(numberRandomPc);
    let opcion;
    if(numberRandomPc === 1){
        opcion = "Piedra";
    } else if (numberRandomPc === 2) {
        opcion = "Papel"; 
    } else if (numberRandomPc === 3) {
        opcion = "Tijera";
    }
    console.log(opcion)
}
