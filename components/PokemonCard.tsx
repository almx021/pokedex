import { Card } from 'antd'
import type { Pokemon } from '../types/pokemon'

interface Props {
  pokemon: Pokemon | null
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  if (!pokemon) return null

  return (
    <Card title={pokemon.name} className="mt-4 shadow-md">
      <p><strong>Altura:</strong> {pokemon.height}</p>
      <p><strong>Tipo:</strong> {pokemon.types.join(', ')}</p>
    </Card>
  )
}

export default PokemonCard
