import moment from 'moment'
import Link from 'next/link'

function ToText (data:any) {
  const tag = document.createElement('div')
  tag.innerHTML = data
  data = tag.innerText
  return data
}

interface ItemBlogProps{
    thumbnail: string;
    title: string;
    createdAt: string;
    description: string;
}

const ItemBlog = ({ thumbnail, title, createdAt, description }:ItemBlogProps) => {
  return (
        <Link href='/detail-portofolio'>
            <div className="lg:w-52 xl:w-64 2xl:w-80">
                <div>
                    <img className="w-full lg:h-36 xl:h-44 2xl:h-52 object-cover"
                        src={thumbnail} alt="thumbnail"
                    />
                </div>
                <div className="p-2 2xl:p-4">
                    <h1 className="font-semibold hover:underline lg:text-base 2xl:text-xl">
                        <Link href={`detail/${title}`}>
                            {title.length > 20 ? title.substring(0, 20) + ' ...' : title}
                        </Link>
                    </h1>
                    <span className="block font-light text-xs 2xl:text-sm text-right">{moment(createdAt).format('DD MMMM YYYY')}</span>
                    <p className="font-light pt-4 text-sm 2xl:text-base">
                        {ToText(description.length) > 100 ? ToText(description.substring(0, 100)) + ' ...' : ToText(description)}
                    </p>
                </div>
            </div>
        </Link>
  )
}

export default ItemBlog
