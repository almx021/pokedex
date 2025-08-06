'use client';

import { useEffect, useState } from "react";

import { getAllPokemons } from "@/services/pokemons";
import { PokemonListResponse } from "@/types/pokemonResponse";


export default function listPokemons() {
    const [value, setValue] = useState<PokemonListResponse | null>(null);
    const [page, setPage] = useState<number>(1)
    const [isError, setError] = useState<Boolean | null>(null);

    const loadPokemons = async () => {
        const result = await getAllPokemons({page})
        if (!result) return;
        
        result.errorCode ? setError(true) : setError(false)
        setValue(result)
    }

    useEffect(() => {
        loadPokemons()
    }, [page])

    return {
        value,
        page,
        setPage,
        isError
    }
}