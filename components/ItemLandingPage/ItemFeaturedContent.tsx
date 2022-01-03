import { ShareIcon, InformationCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const ItemFeaturedContent = () => {
  return (
        <div className="font-oxygen shadow-md bg-white w-80">
            <Link href="/detail/detail-portofolio">
                <img className="w-full h-auto object-cover cursor-pointer"
                    src="/assets/images/featured.jfif"
                />
            </Link>
            <div className="px-4 lg:px-6 py-4 w-72 2xl:w-full">
                <div className="flex items-center justify-between">
                    <h2 className="text-base lg:text-xl font-medium">
                        Job Trailers
                    </h2>
                    <span className="block py-1 px-4 text-sm font-medium rounded-full bg-primary text-secondary">
                        Web Design
                    </span>
                </div>
                <p className="text-sm font-light pt-4 leading-none">
                    Responsive Web job finder for drivers from nextJS and Tailwind CSS.
                </p>
                <div className="flex mt-4 py-3 border-t border-primary border-opacity-25">
                    <div className="w-1/2 flex items-center justify-center">
                        <ShareIcon className="h-8 w-8 text-primary"
                            fill='none' stroke='currentColor'
                        />
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                        <InformationCircleIcon className="h-8 w-8 text-primary"
                            fill='none' stroke='currentColor'
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ItemFeaturedContent
