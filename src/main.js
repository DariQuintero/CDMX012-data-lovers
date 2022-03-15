import data from "./data/pokemon/pokemon.js";

import {
    renderPokemonCard
}

    from "./components.js";

import {
    ordenadoAZ
}

    from "./data.js";

import {
    ordenadoZA
}

    from "./data.js";

import {
    ordenadonumero
}

    from "./data.js";

import {
    kregion
}

    from "./data.js";

import {
    searchWord
}

    from "./data.js";

import {
    jregion
}

    from "./data.js";
import pokemon from "./data/pokemon/pokemon.js";



//contenedor principal
const dataPokemon = data.pokemon;

/*Inicia Función para mostrar todos los pokemones */
export const renderListOfPokemon = (pokemones) => {
    const pokemonList = document.getElementById("pokemon-list");

    const pokemonListHTML = pokemones.map((pokemon) => {
        const pokemonCardHTML = renderPokemonCard(pokemon);
        return pokemonCardHTML;
    }

    ).join("\n");
    pokemonList.innerHTML = pokemonListHTML;
}

renderListOfPokemon(dataPokemon);




/*Termina Función para mostrar todos los pokemones */

let btnfilters = document.getElementsByClassName("btn-filter");

for (let i = 0; i < btnfilters.length; i++) {
    const btnFilter = btnfilters[i];

    btnFilter.addEventListener("click", () => {
        const pokemonList = document.getElementById("pokemon-list");
        pokemonList.innerHTML = '';

        const type = btnFilter.name;

        const pokemonfire = dataPokemon.filter(pokemon => {
            if (pokemon.type[0] == type) {
                return true;
            }

            else if (pokemon.type[1] == type) {
                return true;
            }

            return false;

        }

        )
        renderListOfPokemon(pokemonfire);
    }

    );


}

/*Ocultar y mostrar barra de pokemones */
const showPokemon = document.getElementById("showPokemon")
showPokemon.addEventListener("click", () => {
    document.getElementById("typesPokemon").style.display = "block";
})

const hidePokemon = document.getElementById("hidePokemon")
hidePokemon.addEventListener("click", () => {
    document.getElementById("typesPokemon").style.display = "none";
})
//Filtro A-Z
const az = document.getElementById("az");

az.addEventListener("click", () => {
    renderListOfPokemon(ordenadoAZ(dataPokemon));

}

) //Filtro Z-A
const za = document.getElementById("za");

za.addEventListener("click", () => {
    renderListOfPokemon(ordenadoZA(dataPokemon));

}

) //Filtro por número 

const ordenarnumero = document.getElementById('ordenarnumero');

ordenarnumero.addEventListener("click", () => {
    renderListOfPokemon(ordenadonumero(dataPokemon))
}

) //Filtro por región

const johto = document.getElementById('johto');
const kanto = document.getElementById('kanto') //Johto

johto.addEventListener("click", () => {
    renderListOfPokemon(jregion(dataPokemon))
}

) //Kanto

kanto.addEventListener("click", () => {
    renderListOfPokemon(kregion(dataPokemon))
}



) //Barra de busqueda NUEVO

document.getElementById("search").addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        const word = document.getElementById("search").value //console.log(foundword)
        //searchWord(word, dataPokemon).map(renderPokemonCard)
        const resultadofiltro = searchWord(word, dataPokemon)
        renderListOfPokemon(resultadofiltro);
    }
}


) //Pikachu Home


const loguitofunction = document.getElementById('loguito');

loguitofunction.addEventListener("click", () => {
    renderListOfPokemon(ordenadonumero(dataPokemon))
}

) //Barra de busqueda pokemones por altura

document.getElementById("heightcompare").addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        const word2 = document.getElementById("heightcompare").value
        console.log(word2);
        console.log(renderListOfPokemon);
        const sizepokemon = dataPokemon.map(dataPokemon => dataPokemon.size.height);
        console.log(sizepokemon);
    }

}

) //Función para remover "m" del array

function removerCaracter(texto, posicionCaracter) {
    if (texto.length) {
        if (posicionCaracter >= 0 && posicionCaracter < texto.length) {
            let parte1 = texto.substring(0, posicionCaracter);
            let parte2 = texto.substring(posicionCaracter + 1, texto.length);

            return parte1 + parte2;
        }

        else {
            return texto;
        }
    }

    else {
        return texto;
    }
}

let texto = 'JavaSccript'
console.log(removerCaracter(texto, 5)); // JavaScript




//Barra de busqueda pokemones por altura

document.getElementById("heightcompare").addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        const word2 = document.getElementById("heightcompare").value;
        console.log(word2); //Imprime el dato que genera el usuario

        console.log(renderListOfPokemon)
        const sizepokemon = dataPokemon.map(dataPokemon => dataPokemon.size.height);
        console.log(sizepokemon);

        let solonumeros = sizepokemon.map((altura) => {
            let alturaSeparada = altura.split(" ") //Elimina las m de todo el arreglo
            return alturaSeparada[0];
        }

        )
        console.log(solonumeros);
        const solonumordenado = solonumeros.sort() //ordena mi arreglo
        console.log(solonumordenado)
        let miAltura = word2 // cambio de variable

        console.log(miAltura)
        let indiceEncontrado = 0
        for (let i = 0; i < solonumordenado.length; i++) {
            if (solonumeros[i] > miAltura) {
                indiceEncontrado = i
                break
            }
        }

        if (indiceEncontrado == 0) {
            console.log("error")
        }

        else {
            var pokemonchiquito = (solonumeros[indiceEncontrado - 1])
            var pokemongrande = (solonumeros[indiceEncontrado])
            console.log(pokemonchiquito)
            console.log(pokemongrande)
        }

        const pokemondemialtura1 = (dataPokemon.filter(pk => pk.size.height.includes(pokemonchiquito))) //Pokemones más chiquitos que el usuario
        console.log(pokemondemialtura1)
        const pokemondemialtura2 = (dataPokemon.filter(pk => pk.size.height.includes(pokemongrande))) //Pokemones más grandes que el usuario
        console.log(pokemondemialtura2)
        renderListOfPokemon(pokemondemialtura1)
        renderListOfPokemon(pokemondemialtura2)
        
    }


}

)


//Carrusel

var imagenes = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'gif1.gif', 'gif6.gif']
var cont = 0;
function carrousel(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras')
        let adelante = contenedor.querySelector('.adelante')
        let img = contenedor.querySelector('img')
        let tgt = e.target;

        if (tgt == atras) {
            if (cont > 0) {
                img.src = imagenes[cont - 1]
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }


        } else if (tgt == adelante) {
            if (cont < imagenes.length - 1) {
                img.src = imagenes[cont + 1]
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }

        }


    });


}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');

    carrousel(contenedor);



})