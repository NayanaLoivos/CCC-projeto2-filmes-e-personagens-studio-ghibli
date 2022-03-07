const filmesStudioGhibli = require("./ghibli");
//console.log(filmesStudioGhibli);


let nomesFilmes = [];
for(let info in filmesStudioGhibli.films){
    nomesFilmes.push(filmesStudioGhibli.films[info].title);
}
 