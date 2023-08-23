import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface CardExperienceProps {
  image: string
  name: string
  description: string
  tech?: String[]
}

const CardProject = (props: CardExperienceProps) => {
  const {
    image,
    name,
    description,
    tech
  } = props

  return (
    <div className='flex space-x-4 p-4 rounded-md bg-gray-50 hover:bg-gray-100 group cursor-pointer'>
      <div className='w-1/4 text-sm text-gray-400'>
        <img src={image} alt='Project Image' height={48} width={100} />
      </div>
      <div className='w-3/4 text-base'>
        <div className='flex items-center text-primary'>
          { name }
          <ArrowUpRightIcon className='h-3 w-3 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 ease-in-out' fill='none' stroke='currentColor' />
        </div>
        <div className='text-sm mt-4'>
          { description }
        </div>
        <div className='mt-4 text-sm flex flex-wrap gap-2'>
          {
            tech?.map((item: any, index: number) => {
              return (
                <span key={index} className='bg-third text-primary px-2 py-1 rounded-full'>
                  { item }
                </span>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CardProject
