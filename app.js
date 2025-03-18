// Array para armazenar os nomes dos amigos
let amigos = [];

// Captura de elementos 
const inputAmigo = document.getElementById('amigo');
const botaoAdicionar = document.querySelector('.button-add');
const listaAmigos = document.getElementById('listaAmigos');
const botaoSortear = document.querySelector('.button-draw');
const resultado = document.getElementById('resultado');

// Função para adicionar um amigo à lista
function adicionarNome() {
    const nome = inputAmigo.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Esse nome já foi adicionado.');
        return;
    }

    amigos.push(nome);
    atualizarLista();
    inputAmigo.value = '';
}

// Função para atualizar a exibição da lista
function atualizarLista() {
    listaAmigos.innerHTML = '';

    amigos.forEach((nome, index) => {
        const li = document.createElement('li');
        li.textContent = nome;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = '❌';
        botaoRemover.classList.add('remove-btn');
        botaoRemover.onclick = () => removerNome(index);

        li.appendChild(botaoRemover);
        listaAmigos.appendChild(li);
    });
}

// Função para remover um nome da lista
function removerNome(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    // Exibe o resultado sem apagar a lista
    resultado.innerHTML = `<p>O amigo secreto sorteado é: <strong>${nomeSorteado}</strong>!</p>`;
}

// Adicionando eventos aos botões
botaoAdicionar.addEventListener('click', adicionarNome);
botaoSortear.addEventListener('click', sortearAmigo);
