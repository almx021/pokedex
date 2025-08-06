'use client'

import '@ant-design/v5-patch-for-react-19';

import PokemonList from "@/components/PokemonList";
import PokemonSearch from "@/components/PokemonSearch";
import useListPokemons from "@/hooks/useListPokemons";
import useSearchPokemon from "@/hooks/useSearchPokemon";

import { Button, Space } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


export default function Home() {
  const { value, page, setPage, isError } = useListPokemons()

  if (isError) return (<span className="text-red-500"><strong>
    Erro ao obter os pokémons!<br />Atualize a página ou tente novamente mais tarde.
  </strong></span>)

  const { onSearch } = useSearchPokemon()
  return (
    <Space direction="vertical">
      <h1 className="text-lg font-bold text-blue-800">Pokédex</h1>
      <PokemonSearch onSearch={onSearch} />
      <PokemonList pokemons={value || null} />
      <Space>
        <Button onClick={(e) => setPage(page - 1)} disabled={page === 1}><LeftOutlined /></Button>
        <Button onClick={(e) => setPage(page + 1)} disabled={value?.data.next === ""}><RightOutlined /></Button>
      </Space>
    </Space>
  )
}