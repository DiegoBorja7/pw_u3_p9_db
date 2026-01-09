import axios from "axios";

//Funcion de consumir API Pokemon en forma funcional
const consumirAPIPokemon = async (id) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log("Respuesta:", response.data);
    return response.data; // ← Ahora sí retorna
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

//obtener numeros aleatorios entre 1 y 151
function obtenerNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//obtener vector numerico de 4 numeros aleatorios entre 1 y 200
const obtenerVectorNumerico = () => {
  const vectorNumerico = [];
  for (let i = 0; i < 4; i++) {
    vectorNumerico.push(obtenerNumeroAleatorio(1, 777));
  }
  return vectorNumerico;
};

//obtener datos de 4 pokemons
const obtenerPokemons = async (vectorNumerico) => {
  const [pokemon1, pokemon2, pokemon3, pokemon4] = await Promise.all([
    consumirAPIPokemon(vectorNumerico[0]),
    consumirAPIPokemon(vectorNumerico[1]),
    consumirAPIPokemon(vectorNumerico[2]),
    consumirAPIPokemon(vectorNumerico[3]),
  ]);

  const pokemon1Data = {
    nombre: pokemon1.name,
    id: pokemon1.id,
  };
  const pokemon2Data = {
    nombre: pokemon2.name,
    id: pokemon2.id,
  };
  const pokemon3Data = {
    nombre: pokemon3.name,
    id: pokemon3.id,
  };
  const pokemon4Data = {
    nombre: pokemon4.name,
    id: pokemon4.id,
  };

  return [pokemon1Data, pokemon2Data, pokemon3Data, pokemon4Data];
};

//Facade para exportar la funcion de consumir API Pokemon
export default async function ConsumirVectorPokemonAPIFacade() {
  const vectorPokemon = obtenerVectorNumerico();

  return await obtenerPokemons(vectorPokemon);
}

export function obtenerAleatorioFachada(min, max) {
  return obtenerNumeroAleatorio(min, max);
}
