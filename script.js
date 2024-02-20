const inputText = document.querySelector("#text-list");
const buttonAdd = document.querySelector(".button-add");
const ul = document.querySelector(".itens-li");

buttonAdd.addEventListener("click", adicionarItemDaLista);

function adicionarItemDaLista(event) {
  event.preventDefault();
  const inputValue = inputText.value;
  if (inputValue !== "") {
    const novoLi = criarLi(inputValue);
    const novaDiv = criarDiv();
    novoLi.appendChild(novaDiv)
    ul.appendChild(novoLi);
  } else {
    alert("Insira um texto");
  }
}

function criarDiv() {
  const div = document.createElement("div");
  div.classList.add("container-buttons");

  const inputCheckBox = document.createElement("input");
  inputCheckBox.setAttribute("type", "checkbox");
  inputCheckBox.classList.add("resolved-item");

  const button = document.createElement("button");
  button.classList.add("button-remove");
  button.innerText = "X";

  div.appendChild(inputCheckBox);
  div.appendChild(button);
  return div;
}

function criarLi(text) {
  const li = document.createElement("li");
  li.innerText = text;
  return li;
}
