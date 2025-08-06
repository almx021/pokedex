'use client'

import '@ant-design/v5-patch-for-react-19';

import PokemonCard from "@/components/PokemonCard";
import PokemonSearch from "@/components/PokemonSearch";
import useSearchPokemon from "@/hooks/useSearchPokemon"

import { Button, Space } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useRouter } from "next/navigation";


export default function PokemonDetails() {
  const router = useRouter()
  const { value, onSearch, isError } = useSearchPokemon()
  return (
    <div>
      <Space direction='vertical'>
      <h1 className="text-lg font-bold text-blue-800">Pokédex</h1>
      <PokemonSearch onSearch={onSearch} />
      </Space>
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