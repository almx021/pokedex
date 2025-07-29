import { Pokemon } from "./pokemon";

export type PokemonResponse = {
    errorCode: number | boolean,
    data: Pokemon | string
}