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
  criarTagLiAdicionarNaUl(listaAmigos, amigoSecreto.value);
  amigos.push(amigoSecreto.value);
  amigoSecreto.value = "";
}

function sortearAmigo() {
  let sorteado = parseInt(Math.random() * amigos.length);
  let amigoSorteado = amigos[sorteado];
  criarTagLiAdicionarNaUl(resultado, `O amigo secreto sorteado é: ${amigoSorteado}!`);
}