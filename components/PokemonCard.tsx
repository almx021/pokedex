import Image from 'next/image'

import { Card, Carousel } from 'antd'
import { getColor } from '@/utils/colors'

import type { Pokemon } from '@/types/pokemon'

interface Props {
  result: Pokemon | Record<string, never> | null | undefined
}

const PokemonCard: React.FC<Props> = ({ result }) => {
  if (!result) return null

  return (
    <div className="mt-4 mb-2 flex items-center justify-center">
      <Card title={<p className='font-bold'>{result.name.charAt(0).toUpperCase() + result.name.slice(1).toLowerCase()}</p>}
        className="shadow-md w-1/2 min-w-[325px]"
        styles={{ header: { backgroundColor: `${getColor(result.types[0].type.name)}` }}}
        cover={
          <div className='items-center justify-center text-center'>
            <Image
              alt='Sprite do Pokémon'
              src={result.sprites.front_default}
              width={192}
              height={192} 
              className='m-auto'
              priority/>
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
                  {/* <p><strong>XP base:</strong> {result.base_experience}</p> */}
                  <p><strong>Tipos:</strong> {result.types.map((t) => t.type.name).join(', ')}</p>
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
