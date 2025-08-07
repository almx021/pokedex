'use client';

import { getAllPokemons } from "@/services/pokemons";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


export default function listPokemons() {
    const [page, setPage] = useState(1)
    return {
    query: useQuery({
        queryKey: ['pokemons', page],
        queryFn: () => getAllPokemons({page}),
        placeholderData: (previousData) => previousData,
        retry: false
    }),
    page,
    setPage
}    
    
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