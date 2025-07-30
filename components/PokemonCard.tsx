import Image from 'next/image'

import { Card, Carousel } from 'antd'
import { getColor } from '@/utils/colors'

import type { Pokemon } from '@/types/pokemon'

interface Props {
  result: Pokemon | string | null | undefined
}

const PokemonCard: React.FC<Props> = ({ result }) => {
  if (!result) return null
  if (typeof result === 'string') {
    return (
      <p className='text-red-500'><strong>{result}</strong></p>
    )
  }

  return (
    <div className="mt-4 flex items-center justify-center">
      <Card title={<p className='font-bold'>{result.name.charAt(0).toUpperCase() + result.name.slice(1).toLowerCase()}</p>}
        className="shadow-md w-1/2"
        styles={{ header: { backgroundColor: `${getColor(result.types[0].type.name)}` }}}
        cover={
          <div className='items-center justify-center text-center'>
            <Image
              alt='Sprite do Pokémon'
              src={result.sprites.front_default}
              width={192}
              height={192} 
              className='m-auto'/>
          </div>
        }
      >
        <div className='h-200px w-full/2 rounded-lg pt-1 pb-1' style={{ backgroundColor: `${getColor(result.types[0].type.name)}` }}>
          <Carousel arrows infinite={false} className='pb-7'>
            <div key={1}>
              <p><strong>Informações:</strong></p>
              <div className='flex flex-wrap text-left'>
                <div className='w-1/2 pl-7'>
                  <p><strong>Id:</strong> {result.id}</p>
                  <p><strong>XP base:</strong> {result.base_experience}</p>
                  <p><strong>Tipos:</strong> {result.types.map((t) => { return t.type.name }).join(', ')}</p>
                </div>
                <div className='w-1/2 pl-2'>
                  <p><strong>Altura:</strong> {result.height / 10}m</p>
                  <p><strong>Peso:</strong> {result.weight / 10}kg</p>
                </div>
              </div>
            </div>
            <div key={2}>
              <p><strong>Status de Combate:</strong></p>
              <div className='flex flex-wrap text-left'>
                <div className='w-1/2 pl-7'>
                  {result.stats.slice(0, 3).map((item, index) => (
                    <p key={index}><strong>{item.stat.name}:</strong> {item.base_stat}</p>
                  ))}
                </div>
                <div className='w-1/2'>
                  {result.stats.slice(3, 6).map((item, index) => (
                    <p key={index}><strong>{item.stat.name}:</strong> {item.base_stat}</p>
                  ))}
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </Card>
    </div>
  )
}

export default PokemonCard
