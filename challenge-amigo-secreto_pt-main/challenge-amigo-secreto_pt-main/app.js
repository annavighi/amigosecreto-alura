// Array para armazenar os nomes
let amigos = [];

// Função que captura os nomes colocados na lista
function adicionarAmigo() {
    let nomeAmigos = document.getElementById("amigo").value;

    // Condição que valida se o campo não está vazio
    if (nomeAmigos === "") {
        alert("Por favor, insira um nome!");
        return;
    }

    // Atualiza o array com o nome que foi inserido
    amigos.push(nomeAmigos);

    // Atualiza a lista no HTML
    atualizarLista();

    // Limpa o campo de entrada
    limparInput();

    // Teste no console
    console.log(amigos);
}

// Função que limpa o campo de entrada após captura do valor
function limparInput() {
    let nomeAmigos = document.getElementById("amigo");
    nomeAmigos.value = '';
}

// Função para exibir a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista para evitar duplicados
    lista.innerHTML = "";

    // Percorre o array e adiciona cada amigo como <li>
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Função que sorteia um amigo
function sortearAmigo() {
    // Verifica se a lista está vazia
    if (amigos.length === 0) {
        alert("A lista está vazia!");
        return;
    }

    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostra o resultado na <ul id="resultado">
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    let item = document.createElement("li");
    item.textContent = amigoSorteado;
    listaResultado.appendChild(item);
}