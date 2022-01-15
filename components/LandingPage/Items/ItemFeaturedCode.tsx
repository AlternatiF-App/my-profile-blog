interface ItemFeaturedCodeProps{
    image: string;
    title: string;
    color: string;
}

const ItemFeaturedCode = ({ image, title, color }:ItemFeaturedCodeProps) => {
  return (
        <div className="">
            <div>
                <img className={`${color} w-32 h-32 rounded-md`}
                    src={`/assets/icons/${image}`}
                    alt="icons" loading="lazy"
                />
            </div>
            <div className="text-center pt-4 w-32">
                <span className="block text-white tracking-wider text-xl h-10">
                    {title}
                </span>
            </div>
        </div>
  )
}

export default ItemFeaturedCode
