import { BASE_URL } from './api';
import { Pokemon, PokemonListResponse } from '@/types/pokemon';

export async function getAllPokemons({ page = 1 }: { page: number | null }): Promise<PokemonListResponse> {
  const LIMIT = 20
  page = page ? (page - 1) * LIMIT : 0

  const res = await fetch(`${BASE_URL}/pokemon/?offset=${page}&limit=${LIMIT}`, { cache: 'force-cache' })

  if (!res.ok) {
    throw new Error(`Pokémon não encontrados! Erro: ${res.status}`)
  }
  return await res.json()
}

export async function getPokemon(pokemon: string): Promise<Pokemon> {
  pokemon = pokemon.toLowerCase().trim()

  if (!pokemon) return {};
  
  const res = await fetch(`${BASE_URL}/pokemon/${pokemon}`, { cache: 'force-cache' })

  if (!res.ok) {
    throw new Error(`Pokémon não encontrados! Erro: ${res.status}`)
  }
  return await res.json()
}