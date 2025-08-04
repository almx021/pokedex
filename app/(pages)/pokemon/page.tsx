'use client'

import PokemonCard from "@/components/PokemonCard";
import useSearchPokemon from "@/hooks/useSearchPokemon"

import { Input } from "antd";

const { Search } = Input

export default function PokemonDetails() {
  const { value, onSearch, isError } = useSearchPokemon()
  return (
    <div>
      <main>
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w[900px] min-w-[700px] bg-blue-100 p-6 shadow-md text-center rounded-lg border-red-50">
            <h1 className="text-lg font-bold text-blue-800">Pokédex</h1>
            <p>Busque um pokémon pelo nome ou número da National Pokédex!</p>
            <Search placeholder="Insira nome ou número" onSearch={onSearch} enterButton="Buscar" />
            {isError ?
                <p className='text-red-500'><strong>{value?.errorText}</strong></p>
                : <PokemonCard result={value?.data} />
            }
          </div>
        </div>
      </main>
    </div>
  )
}