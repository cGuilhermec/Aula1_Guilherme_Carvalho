const btn = document.querySelector(".btn");
const entrada = document.querySelector("#entrada");
const novoElemento = window.document.createElement("p");
const saida = window.document.querySelector("#saida");
let atribute = document.createAttribute("");

btn.onclick = () => {
  let texto = document.createTextNode(entrada.value);
  novoElemento.appendChild(texto);

  saida.appendChild(novoElemento);
};
