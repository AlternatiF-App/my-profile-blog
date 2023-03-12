import ItemBlog from './Items/ItemBlog'
import { useState, useEffect, useCallback } from 'react'
import { getMediumData } from '../../pages/api/api'

const CarouselBlog = () => {
  const [data, setData] = useState([])
  const [profile, setProfile] = useState({
    image: ''
  })

  const getData = useCallback(async () => {
    const res = await getMediumData()
    setProfile(res.feed)
    setData(res.items)
  }, [getMediumData])

  useEffect(() => {
    getData()
  }, [])

  return (
        <div className="w-full 2xl:w-11/12 2xl:mx-auto px-8 py-8 lg:px-10 lg:py-16 font-inter">
            <h1 className="text-xl lg:text-2xl 2xl:text-3xl py-2 font-bold text-primary text-center">Blog's</h1>
            <div className="flex 2xl:justify-center space-x-8 lg:space-x-16 overflow-x-auto scrollbar py-4 lg:py-10">
                {
                    data.slice(0, 3).map((item:any, index:number) => {
                      return (
                            <ItemBlog
                                key={index}
                                width={'home'}
                                thumbnail={item.thumbnail}
                                category={item.categories[1]}
                                title={item.title}
                                years={2020}
                                avatar={profile.image}
                                name={item.author}
                                date={item.pubDate}
                            />
                      )
                    })
                }
            </div>
        </div>
  )
}

export default CarouselBlog
