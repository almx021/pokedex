import { Input } from "antd";

const { Search } = Input

type PokemonSearchProps = {
  onSearch: (value: string) => void;
};

const PokemonSearch = ({ onSearch }: PokemonSearchProps) => {
    return (
        <div>
            <p>Busque um pokémon pelo nome ou número da National Pokédex!</p>
            <Search placeholder="Insira nome ou número" onSearch={onSearch} enterButton="Buscar" />
        </div>
    )
}

export default PokemonSearch