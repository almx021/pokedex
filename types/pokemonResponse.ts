import { Pokemon } from "./pokemon";

export type PokemonResponse = {
    errorCode: number | false,
    errorText: string | false
    data: Pokemon | Record<string, never>
}

export type PokemonListResponse = {
    errorCode: number | false,
    errorText: string | false
    data: {
        count: number,
        next: string | null,
        previous: string | null,
        results: {
            name: string,
            url: string
        }[]
    } | Record<string, never>
}