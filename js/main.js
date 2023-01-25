const botaoSalvar = document.querySelector("#cartao__salvar");
let cep = document.querySelector("#cep");
const botaoLimpar = document.querySelector("#cartao__limpar");
let logradouro = document.querySelector("#logradouro");
let cidade = document.querySelector("#cidade");
let numero = document.querySelector("#numero");

const endereco = document.querySelector(".endereco__bg");
let array = [];

const preencherFormulario = (data) => {
  logradouro.value = data.logradouro;
  cidade.value = data.localidade;
};

function limparFormulario() {
  cep.value = "";
  logradouro.value = "";
  numero.value = "";
  cidade.value = "";
}

function salvaFormulario() {
  endereco.innerHTML += `<div class="endereco__container">
      <h3>${cidade.value}</h3>
      <p>${logradouro.value}, ${numero.value}</p>
      <p class="endereco__cep">${cep.value}</p>
  </div>`;
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

async function pesquisaCep() {
  const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
  const data = await response.json();
  if (data.hasOwnProperty("erro")) {
    cep.value = "CEP não encontrado";
  } else {
    preencherFormulario(data);
  }
}
