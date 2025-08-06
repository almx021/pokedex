'use client';

import { useEffect, useState } from "react";

import { getAllPokemons } from "@/services/pokemons";
import { PokemonListResponse } from "@/types/pokemonResponse";
import { useQuery } from "@tanstack/react-query";


export default function listPokemons({page = 1}: {page: number | null}) {
    return useQuery({
        queryKey: ['pokemons', page],
        queryFn: () => getAllPokemons({page}),
        placeholderData: (previousData, previousQuery) => previousData
    })
    
    // criei esse código para listar os pokemons antes de usar o useQuery

    // const [value, setValue] = useState<PokemonListResponse | null>(null);
    // const [page, setPage] = useState<number>(1)
    // const [isError, setError] = useState<Boolean | null>(null);

    // const loadPokemons = async () => {
    //     const result = await getAllPokemons({page})
    //     if (!result) return;
        
    //     result.errorCode ? setError(true) : setError(false)
    //     setValue(result)
    // }

    // useEffect(() => {
    //     loadPokemons()
    // }, [page])

    // return {
    //     value,
    //     page,
    //     setPage,
    //     isError
    // }
}