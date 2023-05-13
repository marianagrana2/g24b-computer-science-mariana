//Crear array de los vecinos, llamar a elemento input, select y container
const searchElement = document.querySelector('#villagerInput');
const villagersContainer = document.querySelector('#villager-container');
const select = document.querySelector('#select');
let villagers = [];

//Funcion Llamar a la API y mostrar información
function fetchvillagers(){
    fetch('http://acnhapi.com/v1/villagers/')
    .then(response => response.json())
    .then(data => {
        printData(data); //Llamar a la funcion que imprime la información
    })
}
fetchvillagers()
//Funcion para imprimir la informacion
function printData(data) {
    const villagersInfo =document.getElementById('villager-info');
    for(let villager in data){
        const div = document.createElement('div'); //Crear elementos html 
        const img = document.createElement('img');
        const villagerName = document.createElement('h3');
        const villagerType = document.createElement('p');
        const species = document.createElement('p');
        const birthday = document.createElement('p'); 

        img.src= data[villager]["image_uri"];
        img.alt="Villager profile image";
        villagerName.textContent = data[villager]["name"]["name-USen"]; // Propiedad del DOM añadir texto a un elemento.
        villagerType.textContent = `Type: ${data[villager]["personality"]}`;
        species.textContent = `Specie: ${data[villager]["species"]}`;
        birthday.textContent =`Birthday: ${data[villager]["birthday-string"]}`;

        div.appendChild(img); 
        div.appendChild(villagerName);
        div.appendChild(villagerType);
        div.appendChild(species);
        div.appendChild(birthday);

        villagersInfo.appendChild(div);
    }
}



