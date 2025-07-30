import { Pokemon } from "./pokemon";

export type PokemonResponse = {
    errorCode: number | false,
    errorText: string | false
    data: Pokemon | string
}