import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideos(evento) {

    evento.preventDefault();

    const termoPesquisado = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(termoPesquisado);
    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => 
        lista.appendChild(constroiCard(elemento.titulo, elemento.url, elemento.descricao, elemento.imagem)));
}

const botaoDeBusca = document.querySelector("[data-btnPesquisa]");

botaoDeBusca.addEventListener("click", evento => buscarVideos(evento))