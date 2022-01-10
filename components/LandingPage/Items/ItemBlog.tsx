interface ItemBlogProps{
    width: string;
    thumbnail: string;
    category: string;
    title: string;
    years: number;
}

const ItemBlog = ({ width, thumbnail, category, title, years }:ItemBlogProps) => {
  return (
        <div className={`${width === 'blog' ? 'w-full lg:w-96' : 'w-64 lg:w-96'} cursor-pointer custom-shadow relative bg-third text-white border-b-2 border-transparent hover:border-secondary transition-all duration-300 ease-in-out`}>
            <div>
                <img className="w-full h-auto"
                    src={`/assets/images/${thumbnail}`}
                    alt="thumbnail"
                />
            </div>
            <div className={`${width === 'blog' ? 'w-full lg:w-96' : 'w-64 lg:w-96'} px-4 py-2 lg:px-6 lg:py-6`}>
                <span className="block text-lg lg:text-xl font-light text-secondary">{category}</span>
                <div className="flex justify-between items-end">
                    <h1 className="text-base lg:text-2xl">{title}</h1>
                    <span className="block font-light">{years}</span>
                </div>
            </div>
        </div>
  )
}

export default ItemBlog
