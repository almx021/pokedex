'use client';

import '@ant-design/v5-patch-for-react-19';

import ErrorMessage from '@/components/ErrorMessage';
import LoadingText from '@/components/LoadingText';
import PokemonCard from "@/components/PokemonCard";
import PokemonSearch from "@/components/PokemonSearch";
import useSearchPokemon from "@/hooks/useSearchPokemon";

import { Button, Space } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useRouter } from "next/navigation";


export default function PokemonDetails() {
  const router = useRouter()
  const { query: { data, isError, isPending, isSuccess }, onSearch } = useSearchPokemon()

  return (
    <Space direction='vertical'>
      <h1 className="text-lg font-bold text-blue-800">Pokédex</h1>
      {isPending ? <LoadingText /> :
        isError ?
          <>
            <PokemonSearch onSearch={onSearch} />
            <ErrorMessage message={`Pokémon não encontrado!\nVerifique se o nome ou número está enserido corretamente.`} />
          </> : isSuccess ?
            <div>
              <PokemonSearch onSearch={onSearch} />
              <PokemonCard result={data} />
              <Space className="mt-2">
                <Button onClick={(e) => router.replace(`/pokemon/${data.id - 1}`)} disabled={data.id === 1}><LeftOutlined /></Button>
                <Button onClick={(e) => router.replace(`/`)}>Voltar</Button>
                <Button onClick={(e) => router.replace(`/pokemon/${data.id + 1}`)}><RightOutlined /></Button>
              </Space>
            </div> : null
      }
    </Space>
  )
}