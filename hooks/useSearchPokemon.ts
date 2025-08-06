'use client';
import { useEffect, useState } from "react";

import { getPokemon } from "@/services/pokemons";
import { PokemonResponse } from "@/types/pokemonResponse";
import { usePathname, useRouter } from "next/navigation";


export default function SearchInput() {
    const pathname = usePathname();
    const router = useRouter();
    const pokemonId = pathname.split('/').filter(Boolean)[1] ?? '';

    const [dataInput, setDataInput] = useState<string>(pokemonId);
    const [value, setValue] = useState<PokemonResponse | null>(null);
    const [isError, setError] = useState<Boolean | null>(null);

    useEffect(() => {
        if (pokemonId !== dataInput) setDataInput(pokemonId)
    }, [pokemonId])

    useEffect(() => {
        if (dataInput && dataInput !== pokemonId) {
            router.replace(`/pokemon/${value}`);
        }
    }, [dataInput])

    useEffect(() => {
        if (!pokemonId) return;

        const fetchPokemon = async () => {
            setError(null);

            const result = await getPokemon(pokemonId)
            if (!result) return;

            result.errorCode ? setError(true) : setError(false)
            setValue(result)
        };
        fetchPokemon();
    }, [pokemonId])

    const onSearch = (pokemon: string) => {
        if (!pokemon || pokemon === pokemonId) return;
        router.replace(`/pokemon/${pokemon}`);
    };

    return {
        value,
        onSearch,
        isError
    }
}