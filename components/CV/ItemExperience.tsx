import { ChevronRightIcon } from '@heroicons/react/outline'

interface ItemExperienceProps{
    jobdesk: string;
    location: string;
    desc: string;
}

const ItemExperience = ({ jobdesk, location, desc }:ItemExperienceProps) => {
  return (
        <div className="flex space-x-6">
            <div>
                <ChevronRightIcon className="h-10 w-10 text-primary" fill="currentColor" stroke="none"/>
            </div>
            <div>
                <h2 className="font-semibold text-xl lg:text-2xl">{jobdesk}</h2>
                <span className="block text-base lg:text-lg">{location}</span>
                <p className="pt-4 text-sm lg:text-base">
                    {desc}
                </p>
            </div>
        </div>
  )
}

export default ItemExperience
