import Link from 'next/link'

interface ItemBlogProps{
    link?: string;
    width: string;
    thumbnail: string;
    category: string;
    title: string;
    years: number;
}

const ItemBlog = ({ link, width, thumbnail, category, title, years }:ItemBlogProps) => {
  return (
        <Link href="/detail/detail">
        <div className={`${width === 'blog' ? 'w-full lg:w-1080 xl:w-1280 2xl:w-1920' : 'w-64 lg:w-96'} cursor-pointer custom-shadow relative bg-third text-white border-b-2 border-transparent hover:border-secondary transition-all duration-300 ease-in-out`}>
            <div>
                <img className="w-full h-auto"
                    src={`/assets/images/${thumbnail}`}
                    alt="thumbnail"
                />
            </div>
            <div className={`${width === 'blog' ? 'w-full' : 'w-64 lg:w-96'} px-4 py-2 lg:px-6 lg:py-6`}>
                <span className="block text-sm 2xl:text-xl font-light text-secondary">{category}</span>
                <div className="flex justify-between items-center">
                    <h1 className="text-base 2xl:text-2xl">{title}</h1>
                    <span className="block text-xs 2xl:text-sm font-light">{years}</span>
                </div>
            </div>
        </div>
        </Link>
  )
}

export default ItemBlog
