'use client'

import '@ant-design/v5-patch-for-react-19';

import ErrorMessage from '@/components/ErrorMessage';
import LoadingText from '@/components/LoadingText';
import PokemonList from "@/components/PokemonList";
import PokemonSearch from "@/components/PokemonSearch";
import useListPokemons from "@/hooks/useListPokemons";
import useSearchPokemon from "@/hooks/useSearchPokemon";

import { Button, Space } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


export default function Home() {

  const { query: { data, isError, isPending, isSuccess }, page, setPage } = useListPokemons();
  const { onSearch } = useSearchPokemon()

  return (
    <Space direction="vertical">
      <h1 className="text-lg font-bold text-blue-800">Pokédex</h1>
      {isPending ? <LoadingText /> :
        isError ? <ErrorMessage message={`Erro ao obter os pokémons!\nAtualize a página ou tente novamente mais tarde.`} /> :
          isSuccess ?
            <>
              <PokemonSearch onSearch={onSearch} />
              <PokemonList pokemons={data || null} />
              <Space>
                <Button onClick={(e) => setPage(page - 1)} disabled={page === 1}><LeftOutlined /></Button>
                <Button onClick={(e) => setPage(page + 1)} disabled={data.next === ""}><RightOutlined /></Button>
              </Space>
            </> : null
      }
    </Space>
  )
}