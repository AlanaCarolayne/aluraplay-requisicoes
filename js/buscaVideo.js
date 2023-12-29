import { conectaAPI } from "./conectaApi.js";
import constroiCard  from "./mostrarVideos.js";
async function buscarVideo(evento){
    evento.preventDefault();
    const pesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaAPI.buscaVideo(pesquisa);

   const lista = document.querySelector('[data-lista]')

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

   busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

   if (busca.length ==0) {
    lista.innerHTML = `<h2 class="mensagem__titulo"> Não existem vídeos com esse termo</h2F>`
   }
}

const btn = document.querySelector('[data-btn]');

btn.addEventListener('click', e => buscarVideo(e));