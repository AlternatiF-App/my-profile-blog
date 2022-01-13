import Link from 'next/link'
import { UserIcon, CalendarIcon } from '@heroicons/react/outline'
import moment from 'moment'

interface ItemBlogProps{
    link?: string;
    width: string;
    thumbnail: string;
    category: string;
    title: string;
    years: string | number;

    avatar: string;
    name: string;
    date: string;
}

const ItemBlog = ({ link, width, thumbnail, category, title, years, avatar, name, date }:ItemBlogProps) => {
  return (
        <Link href={`detail/${title}`}>
        <div className={`${width === 'blog' ? 'w-full' : 'w-64 lg:w-96'} cursor-pointer custom-shadow relative bg-third text-white border-b-2 border-transparent hover:border-secondary transition-all duration-300 ease-in-out`}>
            <div>
                <img className="w-full h-52 lg:h-36 xl:h-44 2xl:h-64 object-cover"
                    src={thumbnail}
                    alt="thumbnail"
                />
            </div>
            <div className={`${width === 'blog' ? 'w-full' : 'w-64 lg:w-96'} px-4 py-4 lg:px-6 lg:py-6`}>
                <div className="flex justify-between space-x-4 items-center lg:h-6">
                    <span className="block text-sm 2xl:text-xl font-light text-secondary capitalize">{category}</span>
                    <span className="block text-xs 2xl:text-sm font-light">{moment(years).format('YYYY')}</span>
                </div>
                <h1 className="text-base 2xl:text-2xl lg:h-16 pt-4">
                    {title.length > 40 ? title.substring(0, 40) + ' ...' : title}
                </h1>
                <div className='pt-8 flex space-x-4 items-center'>
                    <img className='w-10 h-10 2xl:w-12 2xl:h-12 object-cover rounded-full'
                        src={avatar}
                        alt="avatar"
                    />
                    <div className="space-y-1">
                        <div className="flex space-x-2 items-center">
                            <UserIcon className='h-4 w-4 text-white' fill="none" stroke="currentColor"/>
                            <span className="block text-xs font-light">{name}</span>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <CalendarIcon className='h-4 w-4 text-white' fill="none" stroke="currentColor"/>
                            <span className="block text-xs font-light">{moment(date).format('DD MMMM YYYY')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
  )
}

export default ItemBlog
