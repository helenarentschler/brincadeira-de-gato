export default function exibirOpcoes(event, div) {

    div.classList.add("ativa");

    const pata = event.target;

    const opcao = pata.getAttribute("src");
    const imagem = div.querySelector("img");
    const titulo =  div.querySelector("h1");
    const lista = div.querySelector("ul");

    if(opcao == "imagens/paw-1.png") {

        imagem.setAttribute("src", "imagens/fotos/gato1.png");
        titulo.innerText = "Lara";
        lista.innerHTML = "<li>Carinhosa</li><li>Ama lasers</li>";

        div.style.left = pata.offsetLeft + "px";

    } else if(opcao == "imagens/paw-2.png") {

        imagem.setAttribute("src", "imagens/fotos/gato2.png");
        titulo.innerText = "Wanda";
        lista.innerHTML = "<li>Timida</li><li>muito brincalhona</li>";

        div.style.left = pata.offsetLeft + "px";

    } else if(opcao == "imagens/paw-3.png") {

        imagem.setAttribute("src", "imagens/fotos/gato3.png");
        titulo.innerText = "Ferrugem";
        lista.innerHTML = "<li>Muito carinhoso e meigo</li>";

        div.style.left = pata.offsetLeft + "px";
    }
}