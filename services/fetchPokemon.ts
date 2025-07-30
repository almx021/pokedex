import { PokemonResponse } from '@/types/pokemonResponse';

export default async function fetchPokemon(pokemon: string): Promise<PokemonResponse | null> {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`, {cache: 'force-cache'})
    if(!data.ok) {
      return {
        errorCode: data.status,
        errorText: data.status == 404 ? 'Pokémon não encontrado!' : data.statusText,
        data: ''
      };
    }
    return {
      errorCode: false,
      errorText: false,
      data: await data.json()
    }    
  } catch (error) {
    return null;
  }
}