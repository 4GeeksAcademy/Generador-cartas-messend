import "bootstrap";
import "./style.css";


window.onload = function() {
  //write your code here
  const iconos = ["♦", "♥", "♠", "♣"];
  const numerosYLetras = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  
  const iconoRandom = iconos[Math.floor(Math.random() * iconos.length)];
  const numeroRandom = numerosYLetras[Math.floor(Math.random() * numerosYLetras.length)]

  document.querySelector(".icono-top").innerHTML = iconoRandom
  document.querySelector(".numerosyletra").innerHTML = numeroRandom
  document.querySelector(".icono-bottom").innerHTML = iconoRandom

  if (iconoRandom === "♥" || iconoRandom === "♦" ) {
    document.querySelector(".icono-top").style.color = "red";
    document.querySelector(".icono-bottom").style.color = "red";
  } else {
    document.querySelector(".icono-top").style.color = "black";
    document.querySelector(".icono-bottom").style.color = "black";
  }
};