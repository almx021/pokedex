'use client'

import PokemonCard from "@/components/PokemonCard";
import PokemonList from "@/components/PokemonList";
import listPokemons from "@/hooks/useListPokemons";
import useSearchPokemon from "@/hooks/useSearchPokemon"

import { Button, Input, Space, } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const { Search } = Input

export default function Home() {
  const { value, page, setPage, isError } = listPokemons()
  return (
    <Space direction="vertical">
      <h1 className="text-lg font-bold text-blue-800">Pokédex</h1>
      <PokemonList pokemons={value || null} />
      <Space>
        <Button onClick={(e) => setPage(page - 1)} disabled={page === 1}><LeftOutlined /></Button>
        <Button onClick={(e) => setPage(page + 1)} disabled={value?.data.next === ""}><RightOutlined /></Button>
      </Space>
    </Space>
  )
}