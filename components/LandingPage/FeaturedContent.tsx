import ItemFeaturedContent from '../ItemLandingPage/ItemFeaturedContent'
import { useEffect, useCallback, useState } from 'react'
import { getMediumData } from '../../pages/api/api'

const FeaturedContent = () => {
  const [feed, setFeed] = useState<any>([])

  const getFeed = useCallback(async () => {
    const data = await getMediumData()
    setFeed(data)
  }, [getMediumData])

  useEffect(() => {
    getFeed()
  }, [])

  return (
        <div className="font-oxygen">
            <div className="bg-secondary h-72 py-10">
                <div className="w-full 2xl:w-10/12 2xl:mx-auto px-8 pt-6 pb-0 lg:pb-10">
                    <h1 className="text-4xl 2xl:text-6xl font-medium text-center">
                        Blogs
                    </h1>
                </div>
            </div>
            <div className="w-full 2xl:w-10/12 mx-auto px-8 -mt-36 py-10">
                <div className="flex 2xl:justify-center space-x-8 overflow-x-auto hide-scroll-bar">
                    {
                        feed.slice(0, 4).map((item:any, index:number) => {
                          return (
                                <ItemFeaturedContent
                                    key={index}
                                    thumbnail={item.thumbnail}
                                    title={item.title}
                                    categories={item.categories}
                                />
                          )
                        })
                    }
                </div>
            </div>
        </div>
  )
}

export default FeaturedContent
