import { Input, Space } from "antd";

const { Search } = Input

interface PokemonSearchProps {
  onSearch: (value: string) => void;
}

const PokemonSearch = ({ onSearch }: PokemonSearchProps) => {
    return (
        <Space direction="vertical">
        <div>
            <p>Busque um pokémon pelo nome ou número da National Pokédex!</p>
            <Search placeholder="Insira nome ou número" onSearch={onSearch} enterButton="Buscar" />
        </div>
        </Space>
    )
}

export default PokemonSearch