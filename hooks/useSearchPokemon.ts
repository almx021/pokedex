'use client';

import { getPokemon } from "@/services/pokemons";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";


export default function SearchInput() {
    const pathname = usePathname();
    const router = useRouter();
    const pokemonId = pathname.split('/').filter(Boolean)[1] ?? '';

    const onSearch = (pokemon: string) => {
        pokemon = pokemon.trim()
        if (!pokemon || pokemon === pokemonId) return;
        router.replace(`/pokemon/${pokemon}`);
    };

    return {
        query: useQuery({
            queryKey: ['pokemonn', pokemonId],
            queryFn: () => getPokemon(pokemonId),
            placeholderData: (previousData) => previousData,
            enabled: !!pokemonId,
            retry: false
        }),
        onSearch
    }
}