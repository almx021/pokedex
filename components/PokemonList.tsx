import { Pokemon } from "@/types/pokemon"
import { PokemonListResponse } from "@/types/pokemonResponse"
import { Space } from "antd"

const PokemonList = ({ pokemons }: { pokemons: PokemonListResponse | null }) => {
    if (!pokemons) return
    return (
        <div className="bg-white rounded-lg">
            <Space>
                {pokemons.data.results.map((result) => (
                    <div>{result.name}</div>
                ))}
            </Space>
        </div>
    )
}

export default PokemonList