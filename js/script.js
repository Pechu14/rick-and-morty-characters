
let paginaActual = 1

const nextPage = document.getElementById('next-page')
nextPage.addEventListener('click', () => { 
    paginaActual = paginaActual + 1;
    fetchPersonajes(paginaActual)
})

const prevPage = document.getElementById('prev-page')
prevPage.addEventListener('click', () => { 
    if (paginaActual > 1 ) {
        paginaActual = paginaActual - 1;
        fetchPersonajes(paginaActual)
    }
})

const mostartEnPantalla = (personajes) => {
    const divPersonajes = document.getElementById('divPersonajes');

    let totalDivs =''
 
    personajes.forEach(personaje => {
        let  divPersonaje = '<div> <img width=200px src=' + personaje.image + '>  </img> <h3>' + personaje.name + '</h3><h3>' + personaje.species + '</h3></div>'; 
        totalDivs = totalDivs + divPersonaje;
    })
    divPersonajes.innerHTML = totalDivs;
}

function fetchPersonajes(pagina) {

    fetch('https://rickandmortyapi.com/api/character/?page=' + pagina)
        .then((response) => {
            if (!response.ok) {
            throw new Error('solicitud erronea');
            }
            return response.json();
        })
        .then((response) => {
            console.log("🚀 ~ .then ~ response:", response)
            let personajes = response.results;
            mostartEnPantalla(personajes)
        })
        .catch((error) => {
            console.error(error)
            divPersonajes.innerText = 'ha habido un error con la Api: ' + error;
        });
        
}

fetchPersonajes(paginaActual)


