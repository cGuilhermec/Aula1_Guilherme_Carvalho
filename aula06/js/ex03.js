const entradaInput = window.document.querySelector(".entrada");
const saida = window.document.querySelector(".saida");
const btn = window.document.querySelector(".btn");

btn.onclick = () => {
  saida.innerHTML = `<h1>${entradaInput.value}</h1>`;
};
