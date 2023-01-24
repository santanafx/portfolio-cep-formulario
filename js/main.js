const botaoSalvar = document.querySelector("#cartao__salvar");
const cep = document.querySelector("#cep");

const preencherFormulario = (data) => {
  const logradouro = document.querySelector("#logradouro");
  const cidade = document.querySelector("#cidade");
  logradouro.value = data.logradouro;
  cidade.value = data.localidade;
};

async function pesquisaCep() {
  const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
  const data = await response.json();
  console.log(data);
  if (data.hasOwnProperty("erro")) {
    cep.value = "CEP não encontrado";
  } else {
    preencherFormulario(data);
  }
}

cep.addEventListener("focusout", () => {
  pesquisaCep();
});

botaoSalvar.addEventListener("click", (evento) => {
  evento.preventDefault();
});
