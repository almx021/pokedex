import Image from 'next/image'

import { Card } from 'antd'
import { getColor } from '@/utils/colors'

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
    <div className="mt-4 flex items-center justify-center">
      <Card title={<p className='font-bold'>{result.name.charAt(0).toUpperCase()+ result.name.slice(1).toLowerCase()}</p>} 
        className="shadow-md w-1/2"
        styles={{ header: { backgroundColor: `${getColor(result.types[0].type.name)}` } }}
        cover={
          <Image
            alt='Sprite do Pokémon'
            src={result.sprites.front_default}
            width={80}
            height={80} />
        }
      //  {<img alt='Sprite do Pokémon' src={result.sprites.front_default}/>}
      >
        <div className='w-full/2 rounded-lg pt-1 pb-1' style={{backgroundColor: `${getColor(result.types[0].type.name)}`}}>
          <p><strong>Id:</strong> {result.id}</p>
          <p><strong>Altura:</strong> {result.height / 10}m</p>
          <p><strong>XP base:</strong> {result.base_experience}</p>
          <p><strong>Tipos:</strong> {result.types.map((t) => { return t.type.name }).join(', ')}</p>
        </div>
        <div>

        </div>
      </Card>
    </div>
  )
}

export default PokemonCard
