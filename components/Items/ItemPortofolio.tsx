
const ItemPortofolio = () => {
  return (
        <div className="relative w-full h-52 lg:h-40 xl:h-52 2xl:h-64 rounded-md group">
            <img className="w-full h-full object-cover"
                src="/assets/images/web-design.jpg"
                alt="image"
            />
            <div className="absolute top-2 right-2">
                <span className="px-2 py-1 rounded-md bg-secondary text-black font-medium tracking-wide">
                    2021
                </span>
            </div>
        </div>
  )
}

export default ItemPortofolio
