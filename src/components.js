export const renderPokemonCard = (pokemon) => {
    return `
        <div class="card" id="${pokemon.num}">
            <div class="card-image">
                <img src="${pokemon.img}" alt="${pokemon.name}">
            </div>
            <div class="card-content">
                <h3>${pokemon.name}</h3>
                <p>${pokemon.type}</p>
            </div>
        </div>
    `;
};


