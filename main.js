let pilotName = prompt("Qual seu nome. Capitão?");

let velocity = 0;

let newVelocity = prompt("A que velocidade você gostaria de acelerar?");

let confirmVelocity = confirm(
  "estamos acelerando para " + newVelocity + "Km/s"
);

if (confirmVelocity) {
  velocity = newVelocity;
}

console.log(velocity);

if (velocity <= 0) {
  alert("Nave está parada. Considere partir e aumentar a velocidade");
} else if (velocity < 40) {
  alert("você está devagar, Acelera sua Nave Capitão " + pilotName);
} else if (velocity < 80) {
  alert("capitão " + pilotName + " parace uma boa velocidade para manter.");
} else if (velocity < 100) {
  alert(
    "capitão " + pilotName + " Atento velocidade alta. considera a diminuir!"
  );
} else {
  alert(
    "Sr Capitão" +
      pilotName +
      "Velocidade perigosa. Controle automático forçado!"
  );
}
 
alert ("Sr Capitao: " + pilotName + "\n Velocidade: " + velocity + "Km/s")