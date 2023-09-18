import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, url, descricao, imagem) {
    
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen data-url></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura" data-imagem>
            <h3 data-titulo>${titulo}</h3>
            <p data-descricao>${descricao}</p>
        </div>
    `

    return video;
}

async function mostrarVideos() {

    try {

        const listaApi = await conectaApi.listaVideos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.url, elemento.descricao, elemento.imagem)))
    } catch {

        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de videos.</h2>`;
    }
}

mostrarVideos();