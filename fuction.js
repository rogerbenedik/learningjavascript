let spaceshipName = "SuperNova"
function changeSpaceshipName(){
  spaceshipName = "mars"
}
console.log(spaceshipName)
changeSpaceshipName()
console.log(spaceshipName)




// let spaceshipName = prompt("Digite nome da Nave");
// let spaceshipVelocity = 0;
// let chosenOption;

// function showMenu() {
//   let option;
//   while (option != "1" && option != "2" && option != "3" && option != "4") {
//     option = prompt(
//       "O que deseja Fazer?\n" +
//         "1- Acelerar a nave em 5Km/s \n" +
//         "2- Desacelerar a nave em 5km/s\n" +
//         "3- Imprimir dados de bordo\n" +
//         "4- Sair de programa"
//     );
//   }
//   return option;
// }
// function speedUp(velocity) {
//   let newVelocity = velocity + 5;
//   return newVelocity;
// }
// function slowdown(velocity) {
//   let newVelocity = velocity - 5;
//   if (newVelocity < 0) {
//     newVelocity = 0;
//   }
//   return newVelocity;
// }
// function printSpaceshipBoardData(name, velocity) {
//   alert("espaçonave" + name + "\n Velocidade: " + velocity + "Km/s");
// }
// do {
//   chosenOption = showMenu();
//   switch (chosenOption) {
//     case "1":
//       spaceshipVelocity = speedUp(spaceshipVelocity);
//       break;
//     case "2":
//       spaceshipVelocity = slowdown(spaceshipVelocity);
//       break;
//     case "3":
//       printSpaceshipBoardData(spaceshipName, spaceshipVelocity);
//       break;
//     default:
//       alert("Encerrando programa de bordo");
//   }
// } while (chosenOption != "4");

// function speedUp (velocity, acceleration){
//   let newVelocity = velocity + acceleration
//   console.log("Nova Velocidade " + newVelocity)
//   return newVelocity
// }
// speedUp(100,20)
// console.log(speedUp(10, 10))

// let velocity = 80
// let acceleration = 5
//  console.log(velocity)
// velocity = speedUp(velocity, acceleration)
// console.log(velocity)

// function speedUp(velocity, unit = "km/s", acceleration){
//   let newVelocity = velocity + acceleration
//   alert("nova velocidade: " + newVelocity + unit)
// }

// speedUp(50,  20)

// function greetPilot(name, message = "ola"){

//   alert(message + ", " + name)
// }

// greetPilot()

// // function greetPilot(name, message = "Olá"){
//   alert(message + ", " + name)
// }
// greetPilot("Roger Benedik")

// function speedUp(velocity, accelertaion) {
//   let newVelocity = velocity + accelertaion;
//   console.log("Nova Velocidade: " + newVelocity);
// }

// speedUp(60, 10);
// speedUp(40, 20);
// speedUp(80, 5);

// function greetPilot(){
//     alert("bom dia pilot")
// }

// greetPilot()
