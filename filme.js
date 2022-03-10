
export function Filme(titulo, poster) {
   
   const estruturaDiv = document.createElement('div'); 

   estruturaDiv.innerHTML = `<h3> ${titulo} </h3> 
   <img src=${poster}/>`;   

   return estruturaDiv; 

}