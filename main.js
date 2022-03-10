
const urlJason = "https://raw.githubusercontent.com/NayanaLoivos/CCC-projeto2-filmes-e-personagens-studio-ghibli/main/ghibli.json"
const h1Title = document.getElementById('jsontitle');
const jsonPoster = document.getElementById('jsonposter'); //não consigo usar


fetch(urlJason)
    .then(dados => dados.json())     
    .then(resposta => {
         resposta.films.forEach(film => 
            criarFilmeETituloNoHTML(film)
             )
    })       

function criarFilmeETituloNoHTML(film){
    h1Title.innerHTML+=(`<h3>${film.title}</h3>`)
    obterImagem(film.poster)
}    

function obterImagem(url){
    fetch(url)
    .then(dados => dados.blob())
    //.then(resposta => console.log(resposta))
    .then(resposta => {
        const imgURL = URL.createObjectURL(resposta)
        const img = `<img src="${imgURL}"/>` 
    
        h1Title.innerHTML+=(img)
    });
}
    
        
    
  
    
