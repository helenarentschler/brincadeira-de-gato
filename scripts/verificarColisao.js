export default function verificarColisao(gato, chao, chao2, obstaculo, enderecoGato) {

    const obstaculoAltura = obstaculo.offsetHeight;

    //distancia da esquerda da tela
    const obstaculoEsquerda = obstaculo.offsetLeft;

    //distancia a partir de baixo
    const gatoDistanciaChao = +window.getComputedStyle(gato).bottom.replace("px", "");

    const gatoEsquerda = gato.offsetLeft + gato.offsetWidth;

    // condiçoes de colisao: encontrou gato e gato nao passou da altura do obstaculo 
    if(obstaculoEsquerda <= gatoEsquerda && obstaculoEsquerda > 0 && gatoDistanciaChao <= obstaculoAltura) {
       
        chao.style.left = chao.getBoundingClientRect().left + "px";
        chao2.style.left = chao2.getBoundingClientRect().left + "px";
        chao.style.animation = "none";
        chao2.style.animation = "none";
        obstaculo.style.animation = "none";
        obstaculo.style.left = gatoEsquerda -50 + "px";
        gato.style.animation = "none";
        gato.style.bottom = gatoDistanciaChao;
        gato.setAttribute("src", `imagens/${enderecoGato}/gato.gif`);

        return true;
    }     

    return false;
}

