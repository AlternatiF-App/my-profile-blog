import ItemFeaturedContent from '../ItemLandingPage/ItemFeaturedContent'

const FeaturedContent = () => {
  return (
        <div className="font-oxygen">
            <div className="bg-secondary h-72 py-10">
                <div className="w-full 2xl:w-10/12 2xl:mx-auto px-8 pt-6 pb-0 lg:pb-10">
                    <h1 className="text-4xl 2xl:text-6xl font-medium text-center">
                        Portofolio
                    </h1>
                </div>
            </div>
            <div className="w-full 2xl:w-10/12 mx-auto px-8 -mt-36 py-10">
                <div className="flex 2xl:justify-center space-x-8 overflow-x-auto hide-scroll-bar">
                    <ItemFeaturedContent/>
                    <ItemFeaturedContent/>
                    <ItemFeaturedContent/>
                    <ItemFeaturedContent/>
                </div>
            </div>
        </div>
  )
}

export default FeaturedContent
