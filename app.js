let amigoSecreto = document.querySelector("#amigo");
let listaAmigos = document.querySelector("#listaAmigos");
let resultado = document.querySelector("#resultado");
const amigos = [];

function criarTagLiAdicionarNaUl(tag, texto) {
  let campo = document.createElement("li");
  campo.innerHTML = texto;
  campo.style.textAlign = "center";
  tag.appendChild(campo);
}

function adicionarAmigo() {
  if (amigoSecreto.value) {
    criarTagLiAdicionarNaUl(listaAmigos, amigoSecreto.value);
    amigos.push(amigoSecreto.value);
    amigoSecreto.value = "";
  } else {
    alert("Digite um nome de um amigo para adicionar!");
  }
}

function sortearAmigo() {
  if (amigos.length > 0) {
    let sorteado = parseInt(Math.random() * amigos.length);
    let amigoSorteado = amigos[sorteado];
    criarTagLiAdicionarNaUl(resultado, `O amigo secreto sorteado é: ${amigoSorteado}!`);
  } else {
    alert("Para sortear um amigo secreto você precisa adicionar amigos!")
  }
}