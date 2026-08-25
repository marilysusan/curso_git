// Valor inicial del contador
let contador = 0;

// Buscamos los elementos del HTML que vamos a usar
const textoContador = document.getElementById("contador");
const botonSumar = document.getElementById("btn-sumar");

// Cada clic en el boton suma 1 y actualiza lo que se ve en pantalla
botonSumar.addEventListener("click", function () {
  contador = contador + 1;
  textoContador.textContent = contador;
});
