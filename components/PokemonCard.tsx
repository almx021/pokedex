import { Card } from 'antd'
import type { Pokemon } from '@/types/pokemon'

interface Props {
  result: Pokemon | string | null | undefined
}

const PokemonCard: React.FC<Props> = ({ result }) => {
  if (!result) return null
  if (typeof result === 'string') {
    return (
      <p className='text-red-500'><strong>Pokémon não encontrado!</strong></p>
    )
  }

  return (
    <div className="flex items-center justify-center">
      <Card title={result.name} className="mt-4 shadow-md w-1/2"
      cover={<img alt='Sprite do Pokémon' src={result.sprites.front_default}/>}
      >
        <p><strong>Id:</strong> {result.id}</p>
        <p><strong>Altura:</strong> {result.height / 10}m</p>
        <p><strong>XP base:</strong> {result.base_experience}</p>
        <p><strong>Tipos:</strong> {result.types.map((t) => t.type.name).join(', ')}</p>
      </Card>
    </div>
  )
}

export default PokemonCard
