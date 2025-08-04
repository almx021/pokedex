import { PokemonListResponse, PokemonResponse } from '@/types/pokemonResponse';
import { BASE_URL } from './api';

export async function getAllPokemons({page = 1}: {page: number | null}): Promise<PokemonListResponse> {
  const LIMIT = 10
  page = page ? (page - 1) * LIMIT : 0

  const data = await fetch(`${BASE_URL}/pokemon/?offset=${page}&limit=${LIMIT}`, {cache: 'force-cache'})

    if (!data.ok) {
    return {
      errorCode: data.status,
      errorText: data.statusText,
      data: {}
    };
  }
  return {
    errorCode: false,
    errorText: false,
    data: await data.json()
  }
}

export async function getPokemon(pokemon: string): Promise<PokemonResponse | null> {
  pokemon = pokemon.toLowerCase().trim()
  if (!pokemon) return null;

  const data = await fetch(`${BASE_URL}/pokemon/${pokemon}`, { cache: 'force-cache' })
  if (!data.ok) {
    return {
      errorCode: data.status,
      errorText: data.status == 404 ? 'Pokémon não encontrado!' : data.statusText,
      data: {}
    };
  }
  return {
    errorCode: false,
    errorText: false,
    data: await data.json()
  }
}