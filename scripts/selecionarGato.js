
export default function selecionarGato(gato, event) {

    const pata = event.target;
    const opcao = pata.getAttribute("src");

    if(opcao == "imagens/paw-1.png") {

        gato.setAttribute("src", "imagens/animacoes-gato/gato1/gato.png");

        return "animacoes-gato/gato1";
    
    } else if(opcao == "imagens/paw-2.png") {

        gato.setAttribute("src", "imagens/animacoes-gato/gato2/gato.png");

        return "animacoes-gato/gato2";
    
    } else if(opcao == "imagens/paw-3.png") {

        gato.setAttribute("src", "imagens/animacoes-gato/gato3/gato.gif");

        return "animacoes-gato/gato3";
    }
}

