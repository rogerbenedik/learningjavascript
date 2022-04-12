let departureDateEntry = prompt("Digite a data de Partida (fomato DD/MM/YYYY");
let userDepartureDate = moment(departureDateEntry, "DD/MM/YYYY");

let today = moment();

let dateDiff = today - userDepartureDate;

let chosenOption = prompt(
  "Escolha como gostaria de exibir o tempo de partida\n 1- Segundos \n 2 - Minutos \n 3 - Horas \n 4 - Dias"
);
if (chosenOption == 1) {
  let secondsOfDep = Math.round(dateDiff / 1000);
  alert("Tempo de vôo " + secondsOfDep + "Segundos");
} else if (chosenOption == "2") {
  let minutesOfDep = Math.round(dateDiff / 1000 / 60);
  alert("Tempo de vôo " + minutesOfDep + "Minutos");
} else if (chosenOption == "3") {
  let hourOfDep = Math.round(dateDiff / 1000 / 3600);
  alert("Tempo de vôo " + hourOfDep + "Hour");
} else if (chosenOption == "4") {
  let daysOfDep = Math.round(dateDiff / 1000 / 3600 / 24);
  alert("Tempo de vôo " + daysOfDep + "Days");
} else {
  alert("opção inválida");
}

