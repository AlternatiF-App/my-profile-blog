import ItemFeaturedCode from './Items/ItemFeaturedCode'

const FeaturedCode = () => {
  return (
        <div className="font-inter bg-white">
            <div className="w-full 2xl:w-11/12 2xl:mx-auto px-8 py-8 lg:px-10 lg:py-16">
                <h1 className="text-xl lg:text-2xl 2xl:text-3xl py-2 font-bold text-primary text-center">My Skill's</h1>
                <div className="flex lg:justify-center items-center space-x-4 lg:space-x-8 xl:space-x-16 py-4 lg:py-10 overflow-x-auto scrollbar">
                    <ItemFeaturedCode image={'html.png'} title={'HTML'} color={'bg-orange-100'}/>
                    <ItemFeaturedCode image={'css.png'} title={'CSS'} color={'bg-blue-100'}/>
                    <ItemFeaturedCode image={'javascript.png'} title={'JavaScript'} color={'bg-yellow-50'}/>
                    <ItemFeaturedCode image={'reacjs.png'} title={'ReactJS'} color={'bg-blue-50'}/>
                    <ItemFeaturedCode image={'nextjs.png'} title={'NextJS'} color={'bg-gray-200'}/>
                    <ItemFeaturedCode image={'tailwindcss.png'} title={'Tailwind CSS'} color={'bg-blue-100'}/>
                </div>
            </div>
        </div>
  )
}

export default FeaturedCode
