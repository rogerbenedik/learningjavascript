let warpCount = 0;
let chosenOption = "";

let spaceshipName = prompt("Qual nome da sua nave?");
chosenOption = prompt("Deseja entrar em dobra espacial? \n1. Sim \n 2.Não");
while (chosenOption == "1") {
  warpCount += 1;
  chosenOption = prompt("Deseja Relizar a próxima droba? \n 1. sim \n 2. não");
}
alert("Name: " + spaceshipName + "\n Quantidade de dobras: " + warpCount);

// let velocity = 50;
// let acceleration = 5;

// while (velocity <= 100) {
//   console.log("Acelerando: Estamos a " + velocity + "km/s");
//   velocity += acceleration // velocity = velocity + acceleration
// }

// let constellation = "Andromeda"
// let position = 0
// let constellationLength = constellation.length

// while(position < constellationLength){
//     if(constellation[position] == "a" || constellation[position] == "A"){
//         console.log(position)
//     }
//        position += 1
// }
