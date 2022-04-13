let distanceInLy = prompt("Digite a distancia em anos luz");
let chosenOption = prompt(
  "Para qual unidade deseja converter? \n1. Parse(pc) \n2. Unidade Astronomica (AU)" +
    "\n3. Quilomentro (km)\n\n(Digite o numero da opçao desejada)"
);
let chosenUnity;
let convertedDistance;

switch (chosenOption) {
  case "1":
    chosenUnity = "Parsec";
    convertedDistance = distanceInLy * 0.306601;
    break;
  case "2":
    chosenUnity = "Unidade Astronomica";
    convertedDistance = distanceInLy * 63241.1;
    break;
  case "3":
    chosenUnity = "Quilomentro";
    convertedDistance = distanceInLy * 9.5 * Math.pow(10, 12);
    break;
  default:
    chosenOption = "unidade não indentificada";
    convertedDistance = "Conversão fora do escopo";
}
alert(
  "Distancia em Anos-Luz:" +
    distanceInLy +
    "\n" +
    chosenUnity +
    ": " +
    convertedDistance
);

// let velocity = 80;

// switch (velocity * 2) {
//   case 100:
//     console.log("sua velocidade é 100km/s");
//     break;
//   case 160:
//     console.log("sua velocidade é 160/s");
//     break;
//   default:
//     console.log("Velocidade não indenficada");
// }

// let spaceship = "starwar";

// switch (spaceship) {
//   case "Elemental":
//     console.log("Nave mais resisnte");
//     break;
//   case "Raptor":
//     console.log("Nave mais rápida");
//     break;
//   case "Enterprise":
//     console.log("Nave a frota Estelar");
//     break;
//   default:
//     console.log("Nave comun");
// }

// let velocity = 150;
// switch (velocity) {
//   case 80:
//   case 90:
//   case 100:
//     console.log("velocidade aceitavel");
//     break;
//   case 110:
//     console.log("velocidade alta, mas aceitável");
//     break;
//   default:
//     console.log("Velocidade não indentifica");
// }

// let spaceship = "Elemental";
// switch (spaceship) {
//   case "golias":
//     console.log("nave mais resistente");
//   case "Elemental":
//     console.log("nave com melhor aramento");
//   case "helmet":
//     console.log("Rapida ativação de escudo");
//   case "frontier":
//     console.log("nave de infantaria");
//     break;
//   case "enterprise":
//     console.log("nave da frota estralar");
//   default:
//     console.log("nao conheço a nave");
// }
