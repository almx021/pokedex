'use client'
import { Input } from "antd";
import useSearchPokemon from "@/hooks/useSearchPokemon";
import PokemonCard from "@/components/PokemonCard"

const { Search } = Input

export default function Home() {
  const {value, onSearch} = useSearchPokemon()
  return (
    <div>
      <main>
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-1/2 min-w-[800px] bg-blue-100 p-6 shadow-md text-center rounded-lg border-red-50">
            <h1 className="text-lg font-bold text-blue-800">Pokédex</h1>
            <p>Busque um pokémon pelo nome ou número da National Pokédex!</p>
            <Search placeholder="Insira nome ou número" onSearch={onSearch} enterButton="Buscar" />
            <PokemonCard result={typeof value === 'string' ? value : value?.data} />
          </div>
        </div>
      </main>
    </div>
  )
}
