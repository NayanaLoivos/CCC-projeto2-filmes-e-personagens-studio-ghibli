import { Filme } from "./filme.js";

const urlJason = "https://raw.githubusercontent.com/NayanaLoivos/CCC-projeto2-filmes-e-personagens-studio-ghibli/main/ghibli.json"
const h1Title = document.getElementById('jsontitle');



fetch(urlJason)
    .then(dados => dados.json())
    .then(resposta => {
        resposta.films.forEach(film => {
            const { title, poster } = film;
            h1Title.append(Filme(title, poster));
        })
    })





function criarFilmeETituloNoHTML(film) {
    h1Title.innerHTML += (`<h3>${film.title}</h3>`)
    obterImagem(film.poster)
}

function obterImagem(url) {
    fetch(url)
        .then(dados => dados.blob())
        //.then(resposta => console.log(resposta))
        .then(resposta => {
            const imgURL = URL.createObjectURL(resposta)
            const img = `<img src="${imgURL}"/>`

            jsonPoster.innerHTML += (img)
        });
}





