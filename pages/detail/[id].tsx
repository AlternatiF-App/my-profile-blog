/* eslint-disable array-callback-return */
import Header from '../../components/Header/Header'
import ItemReview from '../../components/DetailPortofolio/ItemReview'
import { useState, useCallback, useEffect } from 'react'
import { getMediumData } from '../api/api'
import { useRouter } from 'next/router'
import moment from 'moment'

const DetailBlog = () => {
  const [menu, setMenu] = useState('desc')
  const router = useRouter()
  const { id } = router.query
  const [feed, setFeed] = useState({
    thumbnail: '',
    title: '',
    pubDate: '',
    categories: [],
    author: '',
    content: ''
  })

  const getFeed = useCallback(async () => {
    const data = await getMediumData()
    const posts = data.filter((item:any) => item.categories.length > 0)
    for (const i in posts) {
      const title = posts[i].title
      if (title === id) {
        const post = posts[i]
        setFeed(post)
      }
    }
  }, [getMediumData])

  useEffect(() => {
    getFeed()
  }, [])

  const menuChange = (props:string) => {
    setMenu(props)
  }

  return (
        <>
            <Header/>
            <div className="font-oxygen w-full 2xl:w-10/12 2xl:mx-auto px-4 py-8 lg:px-8 lg:py-20">
                <div className="w-full lg:flex lg:space-x-8">
                    <div className="w-1/3 2xl:p-10">
                        <img className="w-full"
                            src={feed.thumbnail}
                            alt="detail-image"
                        />
                    </div>
                    <div className="w-full lg:w-2/3 pt-8 lg:pt-0 2xl:px-8 2xl:py-16">
                        <h1 className="text-4xl lg:text-5xl font-medium">{feed.title}</h1>
                        <div className="flex space-x-20 pt-2">
                            <span className="block font-semibold">
                                {feed.author}
                            </span>
                            <span className="block font-light">
                                Created At : {moment(feed.pubDate).format('DD MMMM YYYY')}
                            </span>
                        </div>
                        <div className="pt-8 flex space-x-2">
                            {
                                feed.categories.map((item:any, index:number) => {
                                  return <span key={index} className="py-1 px-3 rounded-full text-sm bg-primary text-secondary">{item}</span>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="pt-10">
                    <div className="flex items-center">
                        <span onClick={() => menuChange('desc')} className={`${menu === 'desc' ? ('border-b-2 border-primary bg-secondary text-primary') : ('border-b-2 border-b-transparent text-gray-400')} w-1/2 lg:w-auto flex justify-center items-center transition-all duration-300 ease-in-out px-4 py-2 cursor-pointer font-bold`}>
                            Description
                        </span>
                        <span onClick={() => menuChange('review')} className={`${menu === 'review' ? ('border-b-2 border-primary bg-secondary text-primary') : ('border-b-2 border-b-transparent text-gray-400')} w-1/2 lg:w-auto flex justify-center items-center transition-all duration-300 ease-in-out px-4 py-2 cursor-pointer font-bold`}>
                            Review
                        </span>
                    </div>
                    <div className="py-10">
                        {
                            menu === 'desc' &&
                            <div className="lg:px-4">
                                <div>
                                    <span className="text-base font-light">
                                        Created At : {moment(feed.pubDate).format('DD MMMM YYYY')}
                                    </span>
                                    <div className="pt-4 px-8 font-oxygen content"
                                        dangerouslySetInnerHTML={{ __html: feed.content }}>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            menu === 'review' &&
                            <div className="lg:px-4 space-y-16 transition-all duration-300 ease-in-out">
                                <ItemReview/>
                                <ItemReview/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
  )
}

export default DetailBlog
