import {Pokemon} from "@/types/pokemon";

export default async function fetchPokemon(pokemon: string): Promise<Pokemon> {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
  return await data.json()
}