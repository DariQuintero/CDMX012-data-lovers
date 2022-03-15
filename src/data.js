//Función ordenado AZ/ZA

export function ordenadoAZ(ordenadopokemon) {
  return ordenadopokemon.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }

    if (a.name < b.name) {
      return -1;
    }

    // a must be equal to b
    return 0;
  }

  );

}

export function ordenadoZA(ordenadopokemon2) {
  return ordenadopokemon2.sort(function (a, b) {
    if (a.name > b.name) {
      return -1;
    }

    if (a.name < b.name) {
      return 1;
    }

    // a must be equal to b
    return 0;
  }

  );

}

//Función ordenado por números
export function ordenadonumero(ordenadonum) {
  return ordenadonum.sort(function (a, b) {
    if (a.num > b.num) {
      return 0;
    }

    if (a.num < b.num) {
      return -1;

    }

    return 1;

  }

  );
}

//Función kanto
export function kregion(oj) {
  return oj.filter(function (a) {
    if (a.generation.name === "kanto") {
      return 1;
    }

    else {
      return 0;
    }

  }

  );

}

//Función johto
export function jregion(ok) {
  return ok.filter(function (a) {
    if (a.generation.name === "johto") {
      return 1;
    }

    else {
      return 0;
    }

  }

  );

}

//BARRA DE BUSQUEDA NUEVOOOOOO

export function searchWord(word, dataPokemon) {
  const foundWord = dataPokemon.filter(function (pokemon) {
    if (pokemon.name === word) {
      return true
    }

    return false
  }

  )
  return foundWord
}


//Comparar pokemones

