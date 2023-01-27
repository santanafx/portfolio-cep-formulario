import { limparFormulario } from "./js/limparFormulario.js";
import { preencherFormulario } from "./js/preencherFormulario.js";
import { salvaFormulario } from "./js/salvaFormulario.js";

const botaoSalvar = document.querySelector("#cartao__salvar");
let cep = document.querySelector("#cep");
const botaoLimpar = document.querySelector("#cartao__limpar");
let logradouro = document.querySelector("#logradouro");
let cidade = document.querySelector("#cidade");
let numero = document.querySelector("#numero");

async function pesquisaCep() {
  const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
  const data = await response.json();
  if (data.hasOwnProperty("erro")) {
    cep.value = "CEP não encontrado";
  } else {
    preencherFormulario(data);
  }
}

botaoLimpar.addEventListener("click", (evento) => {
  evento.preventDefault();
  limparFormulario();
});

botaoSalvar.addEventListener("click", (evento) => {
  evento.preventDefault();
  salvaFormulario();
  limparFormulario();
});

cep.addEventListener("focusout", () => {
  pesquisaCep();
});
