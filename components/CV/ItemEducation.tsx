import { ChevronRightIcon } from '@heroicons/react/outline'

interface ItemEducationProps{
    start: number;
    end: number;
    location: string;
}

const ItemEducation = ({ start, end, location }:ItemEducationProps) => {
  return (
        <div className="flex space-x-6">
            <div>
                <ChevronRightIcon className="h-10 w-10 text-primary" fill="currentColor" stroke="none"/>
            </div>
            <div className="uppercase">
                <h2 className="font-semibold text-2xl">From {start} to {end}</h2>
                <span className="block text-kg">{location}</span>
            </div>
        </div>
  )
}

export default ItemEducation
