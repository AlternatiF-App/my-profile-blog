import { ChevronRightIcon } from '@heroicons/react/outline'

interface ItemContentProps{
    id?: string;
    name: string;
}

const ItemContent = ({ id, name }: ItemContentProps) => {
  return (
    <li className="flex items-center text-2xl lg:text-3xl 2xl:text-4xl space-x-4 lg:space-x-8">
        <ChevronRightIcon
            className='h-6 w-6 lg:h-10 lg:w-10'
            fill='none' stroke='currentColor'
        />
        <span className="block font-medium">
            {name}
        </span>
    </li>
  )
}

export default ItemContent
