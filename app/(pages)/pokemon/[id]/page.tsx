'use client'

import PokemonCard from "@/components/PokemonCard";
import useSearchPokemon from "@/hooks/useSearchPokemon"

import { Button, Input, Space } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useRouter } from "next/navigation";

const { Search } = Input

export default function PokemonDetails() {
  const router = useRouter()
  const { value, onSearch, isError } = useSearchPokemon()
  return (
    <div>
      <h1 className="text-lg font-bold text-blue-800">Pokédex</h1>
      <p>Busque um pokémon pelo nome ou número da National Pokédex!</p>
      <Search placeholder="Insira nome ou número" onSearch={onSearch} enterButton="Buscar" />
      {isError ?
        <p className='text-red-500'><strong>{value?.errorText}</strong></p>
        : value ?
          <div>
            <PokemonCard result={value.data} />
            <Space className="mt-2">
              <Button onClick={(e) => router.replace(`/pokemon/${value.data.id - 1}`)} disabled={value.data.id === 1}><LeftOutlined /></Button>
              <Button onClick={(e) => router.replace(`/`)}>Voltar</Button>
              <Button onClick={(e) => router.replace(`/pokemon/${value.data.id + 1}`)}><RightOutlined /></Button>
            </Space>
          </div>
          : null
      }
    </div>
  )
}