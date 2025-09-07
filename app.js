let amigos = [];

function adicionarAmigo() {
  // Capturar o valor do campo
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  // Validar entrada
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Atualizar array
  amigos.push(nome);

  // Atualizar lista exibida e limpar campo
  atualizarLista();
  input.value = "";
  input.focus();
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {

    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear!");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const sorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; 
  const li = document.createElement("li");
  li.textContent = "O amigo secreto é: " + sorteado + " 🎉";
  resultado.appendChild(li);
}

window.adicionarAmigo = adicionarAmigo;
window.sortearAmigo = sortearAmigo;




