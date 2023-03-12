interface ItemFeaturedCodeProps{
    image: string;
    title: string;
    color: string;
}

const ItemFeaturedCode = ({ image, title, color }:ItemFeaturedCodeProps) => {
  return (
        <div className="">
            <div className={`${color} w-32 h-32 rounded-full shadow-card flex justify-center items-center`}>
                <img className='w-24 h-24'
                    src={`/assets/icons/${image}`}
                    alt="icons" loading="lazy"
                />
            </div>
            <div className="text-center pt-4 w-32">
                <span className="block text-primary tracking-wider text-base lg:text-xl h-10">
                    {title}
                </span>
            </div>
        </div>
  )
}

export default ItemFeaturedCode
