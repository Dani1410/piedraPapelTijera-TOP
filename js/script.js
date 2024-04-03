function getPcChoice() {
  let numberRandomPc = Math.floor(Math.random() * 3) + 1;
  let opcionPc;
  if (numberRandomPc === 1) {
    opcionPc = "Piedra";
  } else if (numberRandomPc === 2) {
    opcionPc = "Papel";
  } else if (numberRandomPc === 3) {
    opcionPc = "Tijera";
  }
  return opcionPc.toLowerCase();
}

function getUserChoice() {
  let opcionUser = prompt(
    "Ingrese su opcion a jugar: Piedra | Papel | Tijera"
  ).trim();
  opcionUser = opcionUser.toLowerCase();
  if (isNaN(opcionUser)) {
    if (
      opcionUser == "piedra" ||
      opcionUser == "papel" ||
      opcionUser == "tijera"
    ) {
      return opcionUser;
    } else {
      alert("Error. Debes ingresar un juego valido.");
    }
  } else {
    alert("Error. Ingresa un dato valido | String |");
  }
}

function quienGano(opcionPc, opcionUser) {
  if (opcionPc == opcionUser) {
    alert("Empate. Ambos jugaron: " + opcionPc);

  } else if (opcionPc == "piedra" && opcionUser == "tijera") {

    alert("Gano pc por jugar " + opcionUser + " | Piedra gana a tijera |");

  } else if (opcionPc == "piedra" && opcionUser == "papel") {

    alert("Gano user por jugar " + opcionUser + ". | Papel gana a tijera |");

  } else if (opcionPc == "papel" && opcionUser == "piedra") {

    alert("Gano pc por jugar " + opcionUser + " | Papel gana a piedra |");

  } else if (opcionPc == "papel" && opcionUser == "tijera") {

    alert("Gano user por jugar " + opcionUser + ". | Tijera gana a Papel |" );

  } else if (opcionPc == "tijera" && opcionUser == "papel") {

    alert("Gano pc por jugar " + opcionUser + " | Tijera gana a papel |");

  } else if (opcionPc == "tijera" && opcionUser == "piedra") {

    alert("Gano user por jugar " + opcionUser + ". | Piedra gana a tijera |"

    );
  }
}

function start() {
  let pcChoice = getPcChoice();
  let userChoice = getUserChoice();
  quienGano(pcChoice, userChoice);
  if(confirm("Desea jugar de nuevo")){
    start();
  }
}

start();
