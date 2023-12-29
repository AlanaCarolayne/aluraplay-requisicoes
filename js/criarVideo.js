import {
    conectaAPI
} from "./conectaApi.js";

const form = document.querySelector('[data-formulario]');

form.addEventListener('submit', e => criarVideo(e));


async function criarVideo(evento) {
    evento.preventDefault();

    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.random() * 10).toString();
    try {
        await conectaAPI.criaVideo(titulo, descricao, url, imagem);

        window.location.href = '../pages/envio-concluido.html';
    } catch (e) {
        alert(e)
    }
}