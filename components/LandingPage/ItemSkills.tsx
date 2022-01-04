interface ItemSkillsProps{
    skills: string;
    bar: string;
    percent: number;
}

const ItemSkills = ({ skills, bar, percent }:ItemSkillsProps) => {
  return (
    <div>
        <span className="block font-light">
            {skills}
        </span>
        <div className="flex items-center space-x-4 justify-between">
            <div className="relative w-full">
                <div className="h-2.5 w-full bg-gray-200"/>
                <div className={`${bar} absolute top-0 h-2.5 bg-primary`}/>
            </div>
            <span className="block w-14 text-right">
                {percent}%
            </span>
        </div>
    </div>
  )
}

export default ItemSkills
