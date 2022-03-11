
export function Filme(poster, titulo) {
   
   const estruturaDiv = document.createElement('div'); 
   
   estruturaDiv.innerHTML = `<div class="divTituloEPoster"></div>  
   <img class="estiloPoster" src=${poster}/>
   <h3 class="estiloTitulo"> ${titulo} </h3>`;
   return estruturaDiv; 
}
