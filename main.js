//importando funçoes js
import iniciarJogo from "./scripts/iniciarJogo.js";
import verificarColisao from "./scripts/verificarColisao.js";
import pular from "./scripts/pular.js";
import mudarObstaculo from "./scripts/mudarObstaculo.js";
import exibirOpcoes from "./scripts/exibirOpcoes.js";
import selecionarGato from "./scripts/selecionarGato.js";

// selecionando imagens
const mensagem = document.querySelector("#mensagem");
const gato = document.querySelector("#gato");
const tela = document.querySelector("#jogo");
const chao = document.querySelector("#chao");
const pontos = document.querySelector("#pontuacao span");
const botao = document.querySelector("#recomecar");

const menu = document.querySelector("#escolher");
const div = document.querySelector(".infos");

let iniciou = false;
let enderecoGato = "animacoes-gato/gato1";

// Inicialmente, estes elementos nao existem na tela e devem ser criados via javascript 

    //criando chao 2
    const chao2 = document.createElement("img");
    chao2.setAttribute("src", "imagens/floor.png");
    chao2.id = "chao2";
    tela.appendChild(chao2);

    //criando objeto obstaculo
    const obstaculo = document.createElement("img");
    //inicia como obstaculo 1
    obstaculo.setAttribute("src", "imagens/obstaculos/1.png");
    obstaculo.classList.add("obstaculo");
    tela.appendChild(obstaculo);

botao.addEventListener("click", () => {

    location.reload();
});

menu.addEventListener("mouseover", (event) => {
    

    if(!iniciou) {
        exibirOpcoes(event, div);
    }
});

menu.addEventListener("click", (event) => {

    if(!iniciou) {
        enderecoGato = selecionarGato(gato, event);
    }
});

menu.addEventListener("mouseout", () => {

    div.classList.remove("ativa");
})


document.addEventListener("keydown", () => {

    iniciou = iniciarJogo(mensagem, chao, chao2, gato, obstaculo, enderecoGato);
    
    const verificador = setInterval(() => {

        if(verificarColisao(gato, chao, chao2, obstaculo, enderecoGato)) {
            clearInterval(verificador);
        }
    
        mudarObstaculo(obstaculo);
    
    }, 10);

    const contadorDePontos = setInterval(()=> {

        if(verificarColisao(gato, chao, chao2, obstaculo, enderecoGato)) {
            clearInterval(contadorDePontos);
        }

        pontos.innerText++;

    }, 100);
    
});

document.addEventListener("keydown", (event) => {
    if(gato.getAttribute("src") != `imagens/${enderecoGato}/pulando.png` && !verificarColisao(gato, chao, chao2, obstaculo, enderecoGato)) {
        pular(event, gato, enderecoGato);
    }
});