interface ItemPortofolioProps{
    image: string;
}

const ItemPortofolio = ({ image }:ItemPortofolioProps) => {
  return (
        <div className="group relative w-auto 2xl:h-56 rounded-md group">
            <img className="w-full h-auto object-cover"
                src={`/assets/images/${image}`}
                alt="image" loading="lazy"
            />
            <div className="absolute top-0 right-0 left-0 bg-third group-hover:bg-opacity-50 bg-opacity-0 w-full h-full flex justify-center transition-all duration-300 ease-in-out">
                <div className="pt-24">
                    <span className="px-2 py-1 text-4xl rounded-md text-secondary group-hover:opacity-100 opacity-0 font-medium tracking-wide transition-all duration-300 ease-in-out">
                        2021
                    </span>
                </div>
            </div>
        </div>
  )
}

export default ItemPortofolio
