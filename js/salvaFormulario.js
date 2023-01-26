export function salvaFormulario() {
  const enderecoBg = document.querySelector(".endereco__bg");
  const primeiraDiv = document.createElement("div");

  primeiraDiv.innerHTML = `<h3>${cidade.value}</h3>
  <p>${logradouro.value}, ${numero.value}</p>
  <p class="endereco__cep">${cep.value}</p>`;

  const enderecoContainer = document.querySelector(".endereco__container");
  const segundaDiv = document.createElement("div");
  segundaDiv.classList.add("endereco__container");
  enderecoBg.appendChild(segundaDiv);
  segundaDiv.appendChild(primeiraDiv);

  segundaDiv.appendChild(botaoRemover());
}

function botaoRemover() {
  const button = document.createElement("button");
  button.classList.add("endereco__remover");
  button.innerHTML = "Remover";

  button.addEventListener("click", function () {
    this.parentNode.remove();
  });
  return button;
}
