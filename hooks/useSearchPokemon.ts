'use client';
import { useState } from "react";
import { message } from "antd";

import fetchPokemon from "@/services/fetchPokemon";
import { Pokemon } from "@/types/pokemon";


export default function SearchInput() {
    const [value, setValue] = useState<Pokemon | null>(null);

    const onSearch = async (data: string) => {
        const result = await fetchPokemon(data)
        if (!data) {
            message.error('Pokémon não encontrado!')
            setValue(null)
            return
        }
        setValue(result)
    }
    return {
        value,
        onSearch
    }
}