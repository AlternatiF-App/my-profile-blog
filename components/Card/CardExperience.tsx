import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

interface CardExperienceProps {
  time: string
  position: string
  description: string
  skill?: String[]
}

const CardExperience = (props: CardExperienceProps) => {
  const {
    time,
    position,
    description,
    skill
  } = props

  return (
    <div className='flex space-x-4 p-4 rounded-md bg-gray-50 hover:bg-gray-100 group cursor-pointer'>
      <div className='w-1/4 text-sm text-gray-400'>
        { time }
      </div>
      <div className='w-3/4 text-base'>
        <div className='flex items-center text-primary'>
          { position }
          <ArrowUpRightIcon className='h-3 w-3 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 ease-in-out' fill='none' stroke='currentColor' />
        </div>
        <div className='text-sm mt-4'>
          { description }
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {
            skill?.map((item: any, index: number) => {
              return (
                <span key={index} className='bg-third text-primary text-xs px-2 py-1 rounded-full'>
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

export default CardExperience
