'use client';
import { useState } from "react";

import fetchPokemon from "@/services/fetchPokemon";
import { PokemonResponse } from "@/types/pokemonResponse";


export default function SearchInput() {
    const [value, setValue] = useState<PokemonResponse | string | null>(null);

    const onSearch = async (data: string) => {
        const result = await fetchPokemon(data)
        if (!result || result.errorCode != false) {
            setValue("Pokémon não encontrado!")
            return
        }
        setValue(result)
    }
    return {
        value,
        onSearch
    }
}