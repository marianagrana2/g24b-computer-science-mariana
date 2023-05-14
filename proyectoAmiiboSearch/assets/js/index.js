//Elementos html 
const form = document.querySelector('#form');
const searchInput = document.querySelector('#input');
const searchButton = document.querySelector('#searchButton');
const results = document.querySelector('#results');
const amiiboInfo = document.querySelector('#amiiboContainer');
//Obtener Amiibos por nombre con la API
async function getAmiiboByName(name){
    const response = await fetch (`https://www.amiiboapi.com/api/amiibo/?name=${name}`)
    const data = await response.json();
    const amiibos = data.amiibo.filter(amiibo => amiibo.name.includes(name));
    return amiibos;
}
//Mostrar resultados en pantalla
form.addEventListener('submit',(event) => {
    event.preventDefault();
    const searchValue = searchInput.value.toLowerCase();

    fetch(`https://www.amiiboapi.com/api/amiibo/?name=${searchValue}`)
    .then(response => response.json())
    .then(data => {
        amiiboInfo.innerHTML ='';
        data.amiibo.forEach(amiibo => {
        const amiiboName = document.createElement('h2');
        const amiiboImage = document.createElement('img');
        const amiiboSeries = document.createElement('p');
        const amiiboGame = document.createElement('p');
    
        amiiboName.textContent = amiibo.name;
        amiiboImage.src = amiibo.image;
        amiiboSeries.textContent = `Colección: ${amiibo.amiiboSeries}`;
        amiiboGame.textContent = `Juego: ${amiibo.gameSeries}`;
    
        const amiiboContainer = document.createElement('div')
        amiiboContainer.appendChild(amiiboName);
        amiiboContainer.appendChild(amiiboImage);
        amiiboContainer.appendChild(amiiboSeries);
        amiiboContainer.appendChild(amiiboGame);

        amiiboInfo.appendChild(amiiboContainer);
    })
        })
    .catch(error =>{
        console.error(error);
        alert('Ocurrió un error. Inténtalo de nuevo.')
    })
});

