import Header from '../components/Header/Header'
import { useEffect, useCallback, useState } from 'react'
import { getMediumData } from './api/api'
import ItemBlog from '../components/DetailPortofolio/ItemBlog'

const BlogList = () => {
  const [feed, setFeed] = useState<any>([])

  const getFeed = useCallback(async () => {
    const data = await getMediumData()
    setFeed(data)
  }, [getMediumData])

  useEffect(() => {
    getFeed()
  }, [])

  return (
        <>
            <Header/>
            <div className="w-full 2xl:w-10/12 2xl:mx-auto py-8 px-4 lg:py-20 lg:px-8">
                <div className="space-y-10 lg:space-y-0 lg:grid lg:gap-8 lg:grid-cols-4">
                {
                    feed.map((item:any, index:any) => {
                      return (
                            <ItemBlog
                                key={index}
                                thumbnail={item.thumbnail}
                                title={item.title}
                                createdAt={item.pubDate}
                                description={item.description}
                            />
                      )
                    })
                }
                </div>
            </div>
        </>
  )
}

export default BlogList
