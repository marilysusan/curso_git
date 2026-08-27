// Valor inicial del contador
let contador = 0;

// Buscamos los elementos del HTML que vamos a usar
const textoContador = document.getElementById("contador");
const botonSumar = document.getElementById("btn-sumar");
const botonRestar = document.getElementById("btn-restar");

// Cada clic en el boton suma 1 y actualiza lo que se ve en pantalla
botonSumar.addEventListener("click", function () {
  contador = contador + 1;
  textoContador.textContent = contador;
});

// Cada clic en el boton reduce 1 y actualiza lo que se ve en pantalla
botonRestar.addEventListener("click", function () {
  contador = contador - 1;
  textoContador.textContent = contador;
});
