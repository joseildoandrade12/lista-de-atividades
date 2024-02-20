const inputText = document.querySelector("#text-list");
const buttonAdd = document.querySelector(".button-add");
const ul = document.querySelector(".itens-li");

buttonAdd.addEventListener("click", adicionarItemDaLista);

function adicionarItemDaLista(event) {
  event.preventDefault();
  const inputValue = inputText.value;
  if (inputValue !== "") {
    const novoLi = criarLi(inputValue);
    const novaDiv = criarDiv(novoLi);
    novoLi.appendChild(novaDiv);
    ul.appendChild(novoLi);
    removerLi(novoLi);
    inputText.value = "";
  } else {
    alert("Insira um texto");
  }
}

function criarDiv(li) {
  const div = document.createElement("div");
  const button = document.createElement("button");
  const inputCheckBox = document.createElement("input");

  div.classList.add("container-buttons");

  inputCheckBox.setAttribute("type", "checkbox");
  inputCheckBox.classList.add("resolved-item");

  button.classList.add("button-remove");
  button.innerText = "x";

  div.appendChild(inputCheckBox);
  div.appendChild(button);

  button.addEventListener("click", (event) => {
    removerLi(li, event);
  });
  return div;
}

function removerLi(li, event) {
  if (event.target) {
    li.remove();
  }
}

function criarLi(text) {
  const li = document.createElement("li");
  li.innerText = text;
  return li;
}
