
import { jregion, kregion, ordenadoAZ, ordenadonumero, ordenadoZA, searchWord } from "../src/data.js";
import { renderPokemonCard } from "../src/components.js"


describe("Test del filtrado", () => {
  test("Comprobar que es una función", () => {
    expect(typeof ordenadoAZ).toBe("function")
  });

})

describe("Test del filtrado", () => {
  test("Comprobar que es una función", () => {
    expect(typeof ordenadoZA).toBe("function")
  });

})


describe("Test del filtrado", () => {
  test("Comprobar que es una función", () => {
    expect(typeof ordenadonumero).toBe("function")
  });

})

describe("Test del filtrado", () => {
  test("Comprobar que es una función", () => {
    expect(typeof kregion).toBe("function")
  });

})

describe("Test del filtrado", () => {
  test("Comprobar que es una función", () => {
    expect(typeof jregion).toBe("function")
  });

})

describe("Test del filtrado", () => {
  test("Comprobar que es una función", () => {
    expect(typeof searchWord).toBe("function")
  });

})


describe("Test del filtrado", () => {
  test("Comprobar que es una función", () => {
    expect(typeof renderPokemonCard).toBe("function")
  });

})
