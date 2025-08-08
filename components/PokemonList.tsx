import Link from "next/link";

import { PokemonListResponse } from "@/types/pokemon";


const PokemonList = ({ pokemons }: { pokemons: PokemonListResponse | null }) => {
    if (!pokemons) return null
    
    return (
        <div className="rounded-lg w-[700px] grid grid-cols-5 justify-evenly">
            {pokemons.results.map((result, index) => (
                <Link href={{
                    pathname: `/pokemon/${result.name}`,
                }} className="pointer-events-none" key={index}>
                    <div className="bg-white p-2 m-2 rounded-full pointer-events-auto">
                        <span className="bg-white">{result.name}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default PokemonList