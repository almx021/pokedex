'use client';
import { useState } from "react";

import fetchPokemon from "@/services/fetchPokemon";
import { PokemonResponse } from "@/types/pokemonResponse";


export default function SearchInput() {
    const [value, setValue] = useState<PokemonResponse | null>(null);

    const onSearch = async (data: string) => {
        const result = await fetchPokemon(data)
        if (!result) return

        setValue(result)
    }
    return {
        value,
        onSearch
    }
}