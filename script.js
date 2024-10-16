// script.js

// Función para buscar un Pokémon por nombre o ID
function getPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontró el Pokémon.');
            }
            return response.json();
        })
        .then(data => {
            // Mostrar nombre, altura y peso en las tarjetas
            document.querySelector('.card.one').textContent = `Nombre: ${data.name}`;
            document.querySelector('.card.two').textContent = `Altura: ${data.height}, Peso: ${data.weight}`;

            // Mostrar imagen del Pokémon
            document.querySelector('.card.image').innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}">`;
        })
        .catch(error => {
            document.querySelector('.card.one').textContent = error.message;
            document.querySelector('.card.two').textContent = '';
            document.querySelector('.card.image').textContent = '';
        });
}

// Añadir funcionalidad al botón para realizar la búsqueda
document.getElementById('buscarBtn').addEventListener('click', () => {
    const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase();
    getPokemon(pokemonInput);
});
