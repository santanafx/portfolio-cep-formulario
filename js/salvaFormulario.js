export function salvaFormulario() {
  const endereco = document.querySelector(".endereco__bg");
  endereco.innerHTML += `<div class="endereco__container">
        <h3>${cidade.value}</h3>
        <p>${logradouro.value}, ${numero.value}</p>
        <p class="endereco__cep">${cep.value}</p>
    </div>`;
}
