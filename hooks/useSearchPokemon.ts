'use client';
import { useState } from "react";

import { getPokemon } from "@/services/pokemons";
import { PokemonResponse } from "@/types/pokemonResponse";


export default function SearchInput() {
    const [value, setValue] = useState<PokemonResponse | null>(null);
    const [isError, setError] = useState<Boolean | null>(null);

    const onSearch = async (data: string) => {
        const result = await getPokemon(data)
        if (!result) return;
        
        result.errorCode ? setError(true) : setError(false)
        setValue(result)
    }
    return {
        value,
        onSearch,
        isError
    }
}