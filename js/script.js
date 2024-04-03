let puntuajePc = 0,
  puntuajeUser = 0;

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
  let opcionUser = prompt("Ingrese su opcion a jugar: Piedra | Papel | Tijera");
  if (isNaN(opcionUser)) {
    opcionUser = opcionUser.toLowerCase();
    opcionUser = opcionUser.trim();
    if (
      opcionUser == "piedra" ||
      opcionUser == "papel" ||
      opcionUser == "tijera"
    ) {
      return opcionUser;
    } else {
      alert("Error. Debes ingresar un juego valido.");
      return;
    }
  } else {
    alert("Error. Ingresa un dato valido | String |");
    return;
  }
}

function playRound(opcionPc, opcionUser) {
  if (opcionPc == opcionUser) {
    alert("Empate. Ambos jugaron: " + opcionPc);
  } else if (opcionPc == "piedra" && opcionUser == "tijera") {
    alert("Gano pc por jugar " + opcionUser + " | Piedra gana a tijera |");
    puntuajePc = puntuajePc + 1;
  } else if (opcionPc == "piedra" && opcionUser == "papel") {
    alert("Gano user por jugar " + opcionUser + ". | Papel gana a tijera |");
    puntuajeUser = puntuajeUser + 1;
  } else if (opcionPc == "papel" && opcionUser == "piedra") {
    alert("Gano pc por jugar " + opcionUser + " | Papel gana a piedra |");
    puntuajePc = puntuajePc + 1;
  } else if (opcionPc == "papel" && opcionUser == "tijera") {
    alert("Gano user por jugar " + opcionUser + ". | Tijera gana a Papel |");
    puntuajeUser = puntuajeUser + 1;
  } else if (opcionPc == "tijera" && opcionUser == "papel") {
    alert("Gano pc por jugar " + opcionUser + " | Tijera gana a papel |");
    puntuajePc = puntuajePc + 1;
  } else if (opcionPc == "tijera" && opcionUser == "piedra") {
    alert("Gano user por jugar " + opcionUser + ". | Piedra gana a tijera |");
    puntuajeUser = puntuajeUser + 1;
  }
}

function playGame() {
  for (i = 1; i <= 6; i++) {
    if (i <= 5) {
      alert(
        "Ronda: " +
          i +
          "\nPuntuacion: PC:" +
          puntuajePc +
          " - User:" +
          puntuajeUser
      );
      let pcChoice = getPcChoice();
      let userChoice = getUserChoice();
      if (userChoice == undefined) {
        break;
      }
      playRound(pcChoice, userChoice);
    } else {
      alert(
        "Terminaron las 5 rondas. \nEl ganador es: " +
          (puntuajePc > puntuajeUser
            ? "Pc, con un puntuaje de: " + puntuajePc
            : "User, con un puntuaje de: " + puntuajeUser)
      );
      if (confirm("Quieres jugar de nuevo?")) {
        puntuajePc = 0;
        puntuajeUser = 0;
        playGame();
      }
    }
  }
}

playGame();
