export default function mudarObstaculo(obstaculo) {

    //o obstaculo esta completamnete (toda sua largura) fora da tela a esquerda
    if(obstaculo.getBoundingClientRect().left < -170) {
        
        const i = Math.floor(Math.random() * 3) + 1;
        obstaculo.setAttribute("src", `imagens/obstaculos/${i}.png`);
    }
}

