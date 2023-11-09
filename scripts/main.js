import { atracciones } from "./atraccionesData.js";

//Animacion navbar scroll
var LastScroll = document.documentElement.scrollTop || document.body.scrollTop;
window.onscroll = function (){
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if(LastScroll < scroll){
    document.querySelector("nav").style.transform = "translateY(-100%)"
    document.querySelector("nav").style.transform = "translateY(-100%)"
  }else{
    document.querySelector("nav").style.transform = "translateY(0)"
  }
  LastScroll = scroll

}


//Generador de paginas de atracciones
let seleccionAtraccion = ""
let atraccionEscogida = ""

function selectAtraccion(input){
  seleccionAtraccion = input.innerText
  atraccionEscogida = atracciones.filter(n => n.nombre == seleccionAtraccion)
localStorage.setItem('seleccionAtraccion', JSON.stringify(atraccionEscogida[0]));
}
var inputs = document.querySelectorAll(".inputAtraccion")
inputs.forEach((input) => {
  input.addEventListener("click", () => selectAtraccion(input))
})

document.addEventListener("DOMContentLoaded", () => {
  atraccionEscogida = localStorage.getItem('seleccionAtraccion');
  let atraccion = JSON.parse(atraccionEscogida)
document.querySelector(".atraccionesHero").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)), url(${atraccion.heroURL})`
document.querySelector(".atraccionesNombre").innerText = atraccion.nombre
document.querySelector(".atraccionesInfo").innerText = atraccion.informacion
document.querySelector(".atraccionesMapa").src = atraccion.googleMaps
document.querySelector(".atraccionesUbicacion").innerHTML = `<b>Dirección</b>: ${atraccion.direccion}`
document.querySelector(".atraccionesInfo2").innerText = atraccion.informacion2
document.querySelector(".atraccionesHorarios").innerText = atraccion.horarios
document.querySelector(".atraccionesImagen").src = atraccion.imagen
if(atraccion.sitioWeb){
  document.querySelector(".atraccionesSitioWeb").href = atraccion.sitioWeb; document.querySelector(".atraccionesSitioWeb").innerText = "Sitio Web"
}
if(atraccion.facebook){
  document.querySelector(".atraccionesFacebook").href = atraccion.facebook; document.querySelector(".atraccionesFacebook").innerText = "Facebook"
}
if (atraccion.instagram) {
  document.querySelector(".atraccionesInstagram").href = atraccion.instagram; document.querySelector(".atraccionesInstagram").innerText = "Instagram" 
}
if (atraccion.tiktok) {
  document.querySelector(".atraccionesTiktok").href = atraccion.tiktok; document.querySelector(".atraccionesTiktok").innerText = "Tiktok" 
}
if(atraccion.gmail){
  document.querySelector(".atraccionesGmail").href = atraccion.gmail; document.querySelector(".atraccionesGmail").innerText = "Gmail" 

}
})



//Splide
var splide = new Splide( '.banner', {
  type: 'loop',
  drag: 'free',
  rewind: true,
  snap: true,
  autoplay: true,
} );

splide.mount(  );

//Button
const temaOscuro = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "dark");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
  document.querySelector(".iconoModoOscuro").src="./assets/bxs-sun.svg"

  // Cambia el color de los textos
  document.querySelectorAll(".text-dark").forEach((item) => {
    item.classList.add("text-light")
    item.classList.remove("text-dark")
  })
  // Cambia el color de los fondos
  document.querySelectorAll(".bg-light").forEach((item) => {
    item.classList.add("bg-dark")
    item.classList.remove("bg-light")
  })
}
const temaBlanco = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "ligth");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
  document.querySelector(".iconoModoOscuro").src="./assets/bxs-moon.svg"

  document.querySelectorAll(".text-ligth").forEach((item) => {
    item.classList.add("text-dark")
    item.classList.remove("text-light")
  })
  // Cambia el color de los fondos
  document.querySelectorAll(".bg-dark").forEach((item) => {
    item.classList.add("bg-light")
    item.classList.remove("bg-dark")
  })

}
const cambiarTema = () => {
  document.querySelector("body").getAttribute("data-bs-theme") === "ligth"?
  temaOscuro() : temaBlanco();
}

let tamañoActual = 0;
function aumentarTamañoDeLetra() {
  // Obtenemos todos los elementos con las clases de tamaño de fuente de Bootstrap
  const elementosConTamañoDeFuente = document.querySelectorAll('.fs-5, .fs-4, .display-1');
  console.log(elementosConTamañoDeFuente)
  // Aumentamos el tamaño de fuente de cada elemento en 2px
  elementosConTamañoDeFuente.forEach(elemento => {
    const estiloActual = getComputedStyle(elemento);
    tamañoActual = parseInt(estiloActual.fontSize);
    console.log(tamañoActual)
    elemento.classList.remove("fs-5")
    elemento.classList.remove("fs-4")
    elemento.classList.remove("display-1")
    elemento.style.fontSize = (tamañoActual + 2) + 'px';
  });
}
function disminuirTamañoDeLetra() {
  // Obtenemos todos los elementos con las clases de tamaño de fuente de Bootstrap
  const elementosConTamañoDeFuente = document.querySelectorAll('.fs-5, .fs-4, .display-1');
  console.log(elementosConTamañoDeFuente)
  // Aumentamos el tamaño de fuente de cada elemento en 2px
  elementosConTamañoDeFuente.forEach(elemento => {
    const estiloActual = getComputedStyle(elemento);
    tamañoActual = parseInt(estiloActual.fontSize);
    console.log(tamañoActual)
    elemento.classList.remove("fs-5")
    elemento.classList.remove("fs-4")
    elemento.classList.remove("display-1")
    elemento.style.fontSize = (tamañoActual - 2) + 'px';
  });
}
document.getElementById("font-up").addEventListener("click", () => aumentarTamañoDeLetra())
document.getElementById("font-down").addEventListener("click", () => disminuirTamañoDeLetra())
