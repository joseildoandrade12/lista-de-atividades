const inputText = document.querySelector("#text-list");
const buttonAdd = document.querySelector(".button-add");
const ul = document.querySelector(".itens-li");
const containerModal = document.querySelector(".modal-container");
const buttonFechar = document.querySelector(".button-fechar");
const buttonLimpar = document.querySelector(".button-limpar");
const buttonNo = document.querySelector(".button-no");
const buttonYes = document.querySelector(".button-yes");
const modalConcluded = document.querySelector(".concluded-container");

modalConcluded.addEventListener('click', removerModal)
buttonAdd.addEventListener("click", adicionarItemDaLista);
containerModal.addEventListener("click", fecharModal);
buttonYes.addEventListener("click", removerTodosLi);

const botoesModal = [buttonFechar, buttonLimpar, buttonNo];
botoesModal.forEach((button) => {
  button.addEventListener("click", toggleModal);
});

function adicionarItemDaLista(event) {
  event.preventDefault();
  const inputValue = inputText.value;
  if (inputValue !== "") {
    const novoLi = criarLi(inputValue);
    const novaDiv = criarDiv(novoLi);
    novoLi.appendChild(novaDiv);
    ul.appendChild(novoLi);
    saveValues(inputValue);
    inputText.value = "";
    inputText.focus();
  } else {
    alert("Insira um texto");
  }
}

function criarDiv(li) {
  const div = document.createElement("div");
  const buttonExcluir = document.createElement("button");
  const buttonResolved = document.createElement("button");

  div.classList.add("container-buttons");

  buttonResolved.classList.add("button-resolved");
  buttonResolved.innerText = "✓";

  buttonExcluir.classList.add("button-remove");
  buttonExcluir.innerText = "✗";

  div.appendChild(buttonResolved);
  div.appendChild(buttonExcluir);

  buttonExcluir.addEventListener("click", (event) => {
    removerLi(li, event);
  });
  buttonResolved.addEventListener("click", (event) => {
    concludedTask(event);
  });
  return div;
}

function removerLi(li, event) {
  if (event.target) {
    const paragrafoLi = document.querySelector("li p");
    localStorage.removeItem(paragrafoLi.innerText);
    li.remove();
  }
}

function concludedTask(event) {
  event.preventDefault();
  modalConcluded.classList.add("ativo");
}

function removerModal(event) {
  if (event.target === this) {
    modalConcluded.classList.remove('ativo')
  }
}

function criarLi(text) {
  const li = document.createElement("li");
  li.innerHTML = `<p>${text}</p>`;
  return li;
}

function toggleModal(event) {
  event.preventDefault();
  containerModal.classList.toggle("ativo");
}

function fecharModal(event) {
  if (event.target === this) {
    toggleModal(event);
  }
}

function removerTodosLi() {
  const itens = document.querySelectorAll("li");
  console.log(itens);
  if (itens.length !== 0) {
    itens.forEach((li) => {
      li.remove();
      containerModal.classList.remove("ativo");
      localStorage.clear();
    });
  } else {
    alert("Não tem itens na lista");
  }
}

function saveValues(textLi) {
  localStorage[textLi] = textLi;
}

function setValues() {
  const valoresLi = Object.keys(localStorage);
  valoresLi.forEach((liValue) => {
    const novoLi = criarLi(liValue);
    const novaDiv = criarDiv(novoLi);
    novoLi.appendChild(novaDiv);
    ul.appendChild(novoLi);
  });
}
setValues();
